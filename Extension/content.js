function scrapeCart() {
    let items = document.querySelectorAll('[class^="TitleContainer"]');
    items.forEach(item => {
        console.log(item.textContent.trim());
      });
    return items;
}

// Send data to the background script
chrome.runtime.sendMessage({ action: "cartData", data: scrapeCart() });



