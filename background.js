chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://brainlycompanion.luke-g.me?install=true"}, function (tab) {
        console.log("Launched install page");
    });
});
