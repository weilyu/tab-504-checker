# Tab 504 Checker

## Introduction

Tab 504 Checker is a Chrome extension that automatically monitors all open tabs every 10 seconds and reloads any tab that contains a "504" error in its content. This helps ensure that tabs encountering server errors are promptly reloaded, maintaining your browsing experience.

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

Once the extension is installed, it will automatically start monitoring your open tabs. You don't need to take any further action. The extension will check each tab every 10 seconds, and if a tab contains a "504" error in its content, it will automatically reload the tab.

## Files

- **manifest.json:** The manifest file that defines the extension's permissions and background script.
- **background.js:** The background script that contains the logic for checking and reloading tabs.

## Contributing

If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

By following the steps above, you'll have the Tab 504 Checker extension up and running, ensuring your browsing experience is uninterrupted by "504" errors.
