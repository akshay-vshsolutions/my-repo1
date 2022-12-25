chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.todo == "activate") {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        })
    }
})
