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
            <button class="sg-button sg-button--m sg-button--solid-light chrrybsm" onclick = "localStorage.setItem('--headerfooter', '#ffc7bf');localStorage.setItem('--askloadsec', '#4fb3f6');document.querySelector(':root').style.setProperty('--headerfooter','#ffc7bf');document.querySelector(':root').style.setProperty('--askloadsec','#4fb3f6'); " style = "background: #ffc7bf!important; color: white;"><span class="sg-button__text" style = "font-weight: 900;">Cherry Blossom</span></button>
            <button class="sg-button sg-button--m sg-button--solid-light hicontrast" onclick = "localStorage.setItem('--headerfooter', '#4fc3f6');localStorage.setItem('--askloadsec', '#fbbe2e');document.querySelector(':root').style.setProperty('--headerfooter','#4fc3f6');document.querySelector(':root').style.setProperty('--askloadsec','#fbbe2e'); " style = "color: white; background: #4fc3f6!important;"><span class="sg-button__text" style = "font-weight: 900;">High-Contrast</span></button>
            </div>
            <div class="sg-content-box__content sg-content-box__content--spaced-bottom-large" style = "margin-bottom: 0.5rem;">
                <button class="sg-button sg-button--m sg-button--solid-light" onclick = 'document.querySelector("div.modal").remove();' style = "background:  #60d399!important; color: white;"><span class="sg-button__text">Save</span></button>
            </div>
        </div>
    </div>
</div>`;
    let ext = document.createElement("div");
    ext.innerHTML = `<div data-testid="game_box_extension" class="sg-flex sg-flex--align-items-center sg-flex--justify-content-space-between GameBoxCurrentPlan-module__container--2Royn sg-space-x-m"><div class="sg-flex sg-flex--column sg-space-y-xxs"><div class="sg-flex sg-flex--align-items-center sg-flex--justify-content-space-between"><div class="sg-flex"><div class="sg-text sg-text--xsmall sg-text--bold">Extension Options</div></div></div><div data-testid="game_box_current_plan_name" style = "display: inline-flex;" class="sg-text sg-text--gray sg-text--bold">
    <button class="theme homebut" id = "theme">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style = "fill: white;" viewBox="0 0 24 24"><path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z"/></svg>
    </button>
    <button class="notif homebut"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: white; height: 24px; width:17px;"><path fill="currentColor" d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"></path></svg>
    </button>
</div></div></div>`;
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
