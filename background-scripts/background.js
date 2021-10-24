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
        if (request.options.title === "clickedmod"){
            let parsed = JSON.parse(request.options.message)
            let pfp = parsed["userpfp"]

                if (parsed["userpfp"] === 'undefined'){
                    pfp = "https://brainly.com/img/avatars/100-ON.png"
                }
            var myHeaders = new Headers();
                myHeaders.append("authority", "discord.com");
                myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"");
                myHeaders.append("accept", "application/json");
                myHeaders.append("content-type", "application/json");
                myHeaders.append("accept-language", "en");
                myHeaders.append("sec-ch-ua-mobile", "?0");
                myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36");
                myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
                myHeaders.append("origin", "https://discohook.org");
                myHeaders.append("sec-fetch-site", "cross-site");
                myHeaders.append("sec-fetch-mode", "cors");
                myHeaders.append("sec-fetch-dest", "empty");
                myHeaders.append("referer", "https://discohook.org/");
               
                var raw = JSON.stringify({
                "content": null,
                "embeds": [
                    {
                    "title": "Activated",
                    "description": "Online Moderator Feature Activated",
                    "color": 5223414,
                    "footer": {
                        "text": parsed["userid"],
                        "icon_url": "https://lh3.googleusercontent.com/wYRtBAip6pIxC9SnETuLz8xJbq3Qxo2tu_YOLiBCa5xvgYqdO88WqIdwyur5AlNYlxyn0C8y0qrJmHEF7GmXSRUr0bE=w128-h128-e365"
                    },
                    "thumbnail": {
                        "url": pfp
                    }
                    
                    }
                ],
                "username": "Brainly Companion Logging",
                "avatar_url": "https://i.imgur.com/QSS5RuS.png"
                
                });

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("https://discord.com/api/webhooks/901886602148720650/xl7vkCotY2MIbdjn_TmugZl9aciFbbEhkbMG2GfUYEFgEZYnbyI-aB9XoMtTnxy44CWF?wait=true", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
        if (request.options.title === "loaded"){
            let parsed = JSON.parse(request.options.message)
            console.log(parsed)
            var myHeaders = new Headers();
                myHeaders.append("authority", "discord.com");
                myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"");
                myHeaders.append("accept", "application/json");
                myHeaders.append("content-type", "application/json");
                myHeaders.append("accept-language", "en");
                myHeaders.append("sec-ch-ua-mobile", "?0");
                myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36");
                myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
                myHeaders.append("origin", "https://discohook.org");
                myHeaders.append("sec-fetch-site", "cross-site");
                myHeaders.append("sec-fetch-mode", "cors");
                myHeaders.append("sec-fetch-dest", "empty");
                myHeaders.append("referer", "https://discohook.org/");
                let pfp = parsed["userpfp"]

                if (parsed["userpfp"] === 'undefined'){
                    pfp = "https://brainly.com/img/avatars/100-ON.png"
                }
                var raw = JSON.stringify({
                "content": null,
                "embeds": [
                    {
                    "title": "New User",
                    "description": "New Extension User Found",
                    "color": 5223414,
                    "footer": {
                        "text": parsed["userid"],
                        "icon_url": "https://lh3.googleusercontent.com/wYRtBAip6pIxC9SnETuLz8xJbq3Qxo2tu_YOLiBCa5xvgYqdO88WqIdwyur5AlNYlxyn0C8y0qrJmHEF7GmXSRUr0bE=w128-h128-e365"
                    },
                    "thumbnail": {
                        "url": pfp
                    }
                    
                    }
                ],
                "username": "Brainly Companion Logging",
                "avatar_url": "https://i.imgur.com/QSS5RuS.png"
                
                });

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("https://discord.com/api/webhooks/901899140588503092/X1YYyUruHtiY06pAKNkY6vpFeIuqWpAEHyJy4SpL3wWJRQguMCGw4DopI7HT1ld5EhvS?wait=true", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
});

