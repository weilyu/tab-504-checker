// Function to check tabs for a 504 error and reload if found
async function checkTabs() {
  const tabs = await chrome.tabs.query({});

  tabs.forEach((tab) => {
    if (tab.url.startsWith("http") || tab.url.startsWith("https")) {
      chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          func: checkAndReload,
        })
        .catch((error) => console.error("Error executing script:", error));
    }
  });
}

// Function to be injected into each tab to check for "504" and reload
function checkAndReload() {
  fetch(window.location.href)
    .then((response) => response.text())
    .then((text) => {
      if (
        text.includes("504") &&
        (text.includes("Gateway Timeout") || text.includes("Gateway Time-out"))
      ) {
        window.location.reload();
      }
    })
    .catch((error) => console.error("Error fetching page:", error));
}

// Set an interval to run the check every 10 seconds
setInterval(checkTabs, 10000);
