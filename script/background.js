chrome.runtime.onInstalled.addListener(details => {
  if(details.reason !== "install") return;
  chrome.tabs.create(
    { url: "http://brainlycompanion.luke-g.me?install=true" }, 
    () => console.log("Launched install page")
  );
});
chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.type == "notification")
        
        if (request.options.title === "colors"){
            
            
               
                chrome.tabs.query({ active: true }, function (tabs) {
                    
                    function primaryinj(){
                        chrome.storage.sync.get(['primary'], function(result) {
                            localStorage.setItem("primary",result.primary)
                        });
                    }
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0]["id"] },
                        function: primaryinj,
                      });
                });
              
            
                chrome.tabs.query({ active: true }, function (tabs) {
                    function secondaryinj(){
                        chrome.storage.sync.get(['secondary'], function(result) {
                            localStorage.setItem("secondary",result.secondary)
                        });
                    }
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0]["id"] },
                        function: secondaryinj,
                      });
                });
            
            
                chrome.tabs.query({ active: true }, function (tabs) {
                    function accentinj(){
                        chrome.storage.sync.get(['accent'], function(result) {
                        localStorage.setItem("accent",result.accent)
                    });
                    }
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0]["id"]},
                        function: accentinj,
                      });
                
            });
        }
        
});
