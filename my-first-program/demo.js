chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.todo == "activate") {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        })
    }
})
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.end == "active") {
        chrome.tabs.create({ url: "options.html" });
    }
})