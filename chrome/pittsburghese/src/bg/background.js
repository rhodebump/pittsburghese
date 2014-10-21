var key = "pittsburghese_enabled";


// when the extension is first installed
chrome.runtime.onInstalled.addListener(function (details) {
    localStorage[key] = "true";
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method == "isEnabled")
        sendResponse({
            isEnabled: localStorage[key]
        });
    else
        sendResponse({}); // snub them.
});