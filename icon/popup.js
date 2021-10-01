async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(loadedpopup()), 200)

    });

    let result = await promise; // wait until the promise resolves (*)

}

f();
function resettutorial(){
  localStorage.setItem("showed",false)
}
function loadedpopup(){
  document.getElementById("rate").addEventListener("click", function(){
    chrome.tabs.create({active: true, url: "https://chrome.google.com/webstore/detail/high-contrast-brainly/pkglomajopcdlnknceabnmbbldpegaoi"});
  
  })
  document.getElementById("discord").addEventListener("click", function(){
    chrome.tabs.create({active: true, url: "https://discord.gg/KfwhD3Mbup"});
  
  })
  document.getElementById("reset").addEventListener("click", function(){
    chrome.tabs.query({ active: true }, function (tabs) {
      let tab = tabs[0];
      chrome.scripting.executeScript(
          {
          target: { tabId: tab.id },
          function: resettutorial
          
          }
      );
      });
      this.innerHTML = "Tutorial reset. Refresh the page to view."

  
  })
} 