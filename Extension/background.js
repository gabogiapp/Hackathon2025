chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "cartData") {
        console.log("Shopping Cart Items:", message.data);
        // You can send this data to `popup.js` or an API for further processing.
    }
});
