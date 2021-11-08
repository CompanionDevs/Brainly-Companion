function profile(){
    let thememodal = document.createElement("div");
    thememodal.classList.add("modal");
    thememodal.innerHTML = `
<div class="modal-bg" style="background-color: rgba(79,179,246,0.8);position: fixed;height: 100%;width: 100%;top: 0;left: 0;display:flex; justify-content:center; align-items: center;z-index: 999;overflow-x: hidden;overflow-y: auto;">
    <div class="sg-toplayer__wrapper" style = "background: white; width: 50%; border-radius: 20px; box-shadow: 0 3px 32px 0 rgb(2 10 27 / 15%);">
        <div class="sg-content-box" style = "display: flex;justify-content: center;flex-direction: column;align-items: center;">
            <div class="sg-content-box__content sg-content-box__content--spaced-bottom-large">
                <h2 class="sg-headline">Select a Theme</h2>
            </div>
            <div class = "theme-content" style = "margin-bottom: 1.5rem;">
            <button class = "cherrybsm" onclick = "document.querySelector(':root').style.setProperty('--headerfooter','#ffc7bf');localstorage.setItem('--headerfooter', '#ffc7bf');document.querySelector(':root').style.setProperty('--askloadsec','#4fb3f6');localstorage.setItem('--askloadsec', '#4fc3f6');">Cherry Blossom
            </button>
            <button class = "hicontrast" onclick = "document.querySelector(':root').style.setProperty('--headerfooter','#4fb3f6');localstorage.setItem('--headerfooter', '#4fb3f6');document.querySelector(':root').style.setProperty('--askloadsec','#fbbe2e');localstorage.setItem('--askloadsec', '#fbbe2e');">High-Contrast<button>
            </div>
            <div class="sg-content-box__content sg-content-box__content--spaced-bottom-large" style = "margin-bottom: 0.5rem;">
                <button class="sg-button sg-button--m sg-button--solid" onclick = 'document.querySelector("div.modal").remove();'>
                    <span class="sg-button__text">Close</span>
                </button>
            </div>
        </div>
    </div>
</div>`;
    let ext = document.createElement("div");
    ext.innerHTML = '<div data-testid="game_box_extension" class="sg-flex sg-flex--align-items-center sg-flex--justify-content-space-between GameBoxCurrentPlan-module__container--2Royn sg-space-x-m"><div class="sg-flex sg-flex--column sg-space-y-xxs"><div class="sg-flex sg-flex--align-items-center sg-flex--justify-content-space-between"><div class="sg-flex"><div class="sg-text sg-text--xsmall sg-text--bold">Extension Options</div></div></div><div data-testid="game_box_current_plan_name" style = "display: inline-flex;" class="sg-text sg-text--gray sg-text--bold"><button class="theme homebut" id = "theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 21.832c4.587.38 2.944-4.493 7.188-4.538l1.838 1.534c.458 5.538-6.315 6.773-9.026 3.004zm14.065-7.115c1.427-2.239 5.847-9.749 5.847-9.749.352-.623-.43-1.273-.976-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.039 3.995-2.81zm-11.999 3.876c.666-1.134 1.748-2.977 4.447-3.262.434-2.087.607-3.3 2.547-5.112 1.373-1.282 4.938-4.409 7.021-6.229-1-2.208-4.141-4.023-8.178-3.99-6.624.055-11.956 5.465-11.903 12.092.023 2.911 1.081 5.571 2.82 7.635 1.618.429 2.376.348 3.246-1.134zm6.952-15.835c1.102-.006 2.005.881 2.016 1.983.004 1.103-.882 2.009-1.986 2.016-1.105.009-2.008-.88-2.014-1.984-.013-1.106.876-2.006 1.984-2.015zm-5.997 2.001c1.102-.01 2.008.877 2.012 1.983.012 1.106-.88 2.005-1.98 2.016-1.106.007-2.009-.881-2.016-1.988-.009-1.103.877-2.004 1.984-2.011zm-2.003 5.998c1.106-.007 2.01.882 2.016 1.985.01 1.104-.88 2.008-1.986 2.015-1.105.008-2.005-.88-2.011-1.985-.011-1.105.879-2.004 1.981-2.015zm10.031 8.532c.021 2.239-.882 3.718-1.682 4.587l-.046.044c5.255-.591 9.062-4.304 6.266-7.889-1.373 2.047-2.534 2.442-4.538 3.258z"></path></svg></button><button class="notif homebut"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: black; height: 24px; width:17px;"><path fill="currentColor" d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"></path></svg></button></div></div></div>';
    //options on question page
    if (document.querySelector("body > div.js-page-wrapper > div > div.sg-flex.sg-flex--column.js-feed > div.sg-layout > div > div.sg-layout__aside-content > div.sg-flex.sg-flex--margin-bottom-m > div > div > div:nth-child(2)") !== null){
    document.querySelector("body > div.js-page-wrapper > div > div.sg-flex.sg-flex--column.js-feed > div.sg-layout > div > div.sg-layout__aside-content > div.sg-flex.sg-flex--margin-bottom-m > div > div > div:nth-child(2)").prepend(ext);}
    //options on homepage
    if (document.querySelector("#question-sg-layout-container > div.brn-qpage-layout.js-main-container.js-ads-screening-content > div.brn-qpage-layout__right.js-aside-content > div > div.sg-flex.sg-flex--margin-bottom-m > div > div > div:nth-child(2)") !== null){
    document.querySelector("#question-sg-layout-container > div.brn-qpage-layout.js-main-container.js-ads-screening-content > div.brn-qpage-layout__right.js-aside-content > div > div.sg-flex.sg-flex--margin-bottom-m > div > div > div:nth-child(2)").prepend(ext);}
    
    //plan name on question page
    if (document.querySelector("#question-sg-layout-container > div.brn-qpage-layout.js-main-container.js-ads-screening-content > div.brn-qpage-layout__right.js-aside-content > div > div.sg-flex.sg-flex--margin-bottom-m > div > div > div:nth-child(2) > div.sg-flex.sg-flex--align-items-center.sg-flex--justify-content-space-between.GameBoxCurrentPlan-module__container--2Royn.sg-space-x-m > div.sg-flex.sg-flex--column.sg-space-y-xxs > div.sg-text.sg-text--gray.sg-text--bold") !== null){
        document.querySelector("#question-sg-layout-container > div.brn-qpage-layout.js-main-container.js-ads-screening-content > div.brn-qpage-layout__right.js-aside-content > div > div.sg-flex.sg-flex--margin-bottom-m > div > div > div:nth-child(2) > div.sg-flex.sg-flex--align-items-center.sg-flex--justify-content-space-between.GameBoxCurrentPlan-module__container--2Royn.sg-space-x-m > div.sg-flex.sg-flex--column.sg-space-y-xxs > div.sg-text.sg-text--gray.sg-text--bold").innerHTML = "Brainly Companion";
    }
    //plan name on homepage
    if (document.querySelector("body > div.js-page-wrapper > div > div.sg-flex.sg-flex--column.js-feed > div.sg-layout > div > div.sg-layout__aside-content > div.sg-flex.sg-flex--margin-bottom-m > div > div > div:nth-child(2) > div.sg-flex.sg-flex--align-items-center.sg-flex--justify-content-space-between.GameBoxCurrentPlan-module__container--2Royn.sg-space-x-m > div.sg-flex.sg-flex--column.sg-space-y-xxs > div.sg-text.sg-text--gray.sg-text--bold") !== null){
        document.querySelector("body > div.js-page-wrapper > div > div.sg-flex.sg-flex--column.js-feed > div.sg-layout > div > div.sg-layout__aside-content > div.sg-flex.sg-flex--margin-bottom-m > div > div > div:nth-child(2) > div.sg-flex.sg-flex--align-items-center.sg-flex--justify-content-space-between.GameBoxCurrentPlan-module__container--2Royn.sg-space-x-m > div.sg-flex.sg-flex--column.sg-space-y-xxs > div.sg-text.sg-text--gray.sg-text--bold").innerHTML = "Brainly Companion";
    }
    
    document.getElementById("theme").addEventListener("click",function(){document.querySelector("body").appendChild(thememodal);});
}

var timeoutId = window.setTimeout(function() {
    profile()
  }, 5000);
