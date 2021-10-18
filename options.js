
function saveColor(){
  let primary = document.getElementsByClassName("color-input")[0]
  let secondary = document.getElementsByClassName("color-input")[1]
  let accent = document.getElementsByClassName("color-input")[2]
  let savedPrimary = localStorage.getItem("primary")
  let savedSecondary = localStorage.getItem("secondary")
  let savedAccent = localStorage.getItem("accent")
  if (savedPrimary !== undefined){
      primary.value = savedPrimary   
  }
  if (savedSecondary !== undefined){
      secondary.value = savedSecondary   
  }
  if (savedAccent !== undefined){
      accent.value = savedAccent   
  }
  primary.addEventListener('change', function(){
      localStorage.setItem("primary",this.value)
      chrome.storage.sync.set({"primary": primary.value}, function() {
        console.log('Value is set to ' + primary.value);
      });
      
  });
  secondary.addEventListener('change', function(){
      localStorage.setItem("secondary",this.value)
      chrome.storage.sync.set({"secondary": secondary.value}, function() {
        console.log('Value is set to ' + secondary.value);
      });
  });
  accent.addEventListener('change', function(){
      localStorage.setItem("accent",this.value)
      chrome.storage.sync.set({"accent": accent.value}, function() {
        console.log('Value is set to ' + accent.value);
      });
  });
}

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(saveColor()), 500)

    });

    let result = await promise; // wait until the promise resolves (*)

}

f();