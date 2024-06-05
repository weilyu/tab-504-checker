# Tab 504 Checker

## Introduction

Tab 504 Checker is a Chrome extension that automatically monitors all open tabs every 30 seconds and reloads any tab that contains a "504" error in its content. This helps ensure that tabs encountering server errors are promptly reloaded, maintaining your browsing experience.

## Installation

1. **Download or Clone the Repository**

   Download the repository or clone it to your local machine.

2. **Open Chrome Extensions Page**

   Open Google Chrome and navigate to `chrome://extensions/`.

3. **Enable Developer Mode**

   Enable "Developer mode" by toggling the switch at the top right corner of the page.

4. **Load Unpacked Extension**

   Click on the "Load unpacked" button and select the directory where you saved the `manifest.json` and `background.js` files.

## Usage

Once the extension is installed, it will automatically start monitoring your open tabs. You don't need to take any further action. The extension will check each tab every 30 seconds, and if a tab contains a "504" error in its content, it will automatically reload the tab.

## Turning Off the Extension

If you want to turn off the Tab 504 Checker extension, follow these steps:

1. **Open Chrome Extensions Page**

   Open Google Chrome and navigate to `chrome://extensions/`.

2. **Disable the Extension**

   Find the Tab 504 Checker extension in the list and toggle the switch to disable it.

3. **Remove the Extension (Optional)**

   If you no longer need the extension, you can remove it by clicking the "Remove" button next to the extension's name.

## Changing the Check Interval

To change the interval at which the extension checks for "504" errors:

1. Open the `background.js` file in a text editor.
2. Locate the line with the `chrome.alarms.create` function:

   chrome.alarms.create("checkTabsAlarm", { periodInMinutes: 0.5 });

3. Change `0.5` (0.5 minutes) to your desired interval in minutes. Please note that the minimum alarm interval supported by Chrome is currently 30 seconds. For example, to check every 1 minute, change it to:

   chrome.alarms.create("checkTabsAlarm", { periodInMinutes: 1 });

4. Save the changes and reload the extension in Chrome:

   - Go to `chrome://extensions/`.
   - Find the Tab 504 Checker extension and click the "Reload" button (circular arrow icon).

## Files

- **manifest.json:** The manifest file that defines the extension's permissions and background script.
- **background.js:** The background script that contains the logic for checking and reloading tabs.

## Contributing

If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
