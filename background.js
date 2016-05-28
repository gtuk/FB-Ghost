chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }; },
    { urls: ["*://www.facebook.com/ajax/messaging/typ.php?*", "*://www.facebook.com/ajax/mercury/change_read_status.php?*"] },
    ["blocking"]
);