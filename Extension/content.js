function scrapeCart() {
    let items = document.querySelectorAll('[class^="TitleContainer"]');
    let itemNames = [];
    
    items.forEach(item => {
        console.log("Scraped item:", item.textContent.trim());
        itemNames.push(item.textContent.trim());
    });

    let itemNamesString = itemNames.join(', ');
    console.log("Cart data:", itemNamesString);
    
    return itemNamesString;
}

// Send data to the background script
chrome.runtime.sendMessage({ action: "cartData", data: scrapeCart() }, (response) => {
    if (chrome.runtime.lastError) {
        console.error("Error sending message:", chrome.runtime.lastError);
    } else {
        console.log("Message sent successfully");
    }
});
