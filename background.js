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

// Function to be injected into each tab to check for "504" in the current content and reload
function checkAndReload() {
  const bodyText = document.body.innerText;

  if (
    bodyText.includes("504") &&
    (bodyText.includes("Gateway Timeout") ||
      bodyText.includes("Gateway Time-out"))
  ) {
    window.location.reload();
  }
}

// Set an interval to run the check every 10 seconds
setInterval(checkTabs, 10000);
