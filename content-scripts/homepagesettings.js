function profile(){
    let thememodal = document.createElement("div");
    thememodal.classList.add("modal");

    thememodal.innerHTML = `


    <div class="modal-bg" style="background-color: rgba(79,179,246,0.8);position: fixed;height: 100%;width: 100%;top: 0;left: 0;display:flex; justify-content:center; align-items: center;z-index: 999;overflow-x: hidden;overflow-y: auto;">
        <div class="sg-toplayer__wrapper" style = "background: white;height: max-content;padding: 40px;width: max-content;border-radius: 20px;box-shadow: 0 3px 32px 0 rgb(2 10 27 / 15%);">
        <div class="sg-content-box" style="display: flex;justify-content: center;flex-direction: column;align-items: center; height: 100%; width: 100%;">
        <div class="sg-content-box__content sg-content-box__content--spaced-bottom-large" style="width: 100%;">
            <h2 class="sg-headline" style="font-size: 40px;color: #323C45;font-weight: 900;">Themes</h2>
        </div>
    <div class="theme-content" style="margin-bottom: 1.5rem;padding: 10px;border: 2px solid #c3d1dd;border-radius: 20px; position: relative;">
        <h1 class="sg-text-bit sg-text-bit--mint-primary" style="font-size: 22px;background: white;position: absolute;top: -21px;">Preset Themes</h1>
        <button id = "cherrybsm" class="sg-button sg-button--m sg-button--solid-light chrrybsm" style="background: #ffc7bf!important; color: white;"><span class="sg-button__text" style="font-weight: 900;background: #ffc7bf!important;color: white;font-size: 15px;margin: 10px;">Cherry Blossom</span></button>
        <button id = "hicont" class="sg-button sg-button--m sg-button--solid-light hicontrast" style="color: white; background: #4fc3f6!important;"><span class="sg-button__text" style="font-weight: 900;color: white;font-size: 15px;margin: 10px;">High-Contrast</span></button>
        <button id = "hannah" class="sg-button sg-button--m sg-button--solid-light hicontrast" style="color: white; background: #4fc3f6!important;"><span class="sg-button__text" style="font-weight: 900;color: white;font-size: 15px;margin: 10px;">Hannah's Theme</span></button>
    </div>
    <div class="customtheme" style="border: 2px solid #c3d1dd;border-radius: 20px;width: max-content;padding: 10px;margin-bottom: 0.5rem;position: relative;">
        <h1 class="sg-text-bit sg-text-bit--mustard-primary" style="font-size: 22px;position: absolute;top: -20px;background: white;">Custom Theme</h1>
        <div class="custinp" style="width: max-content;display: flex;">
            <div class="headerfooter" style="margin-right: 10px;display: flex;border-right: 1px solid #c3d1dd;"><h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary">Header &amp; Footer</h1>
                <input class = "color-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="headerfooter" name="headerfooter" value="#ffffff">
            </div>
            <div class="ansbut" style="display: flex;border-right: 1px solid #c3d1dd;margin-right: 7px;"><h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary" style="color: #60d399;">button 1</h1>
                <input class = "color-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="ansbut" name="ansbut" value="#ffffff">
            </div>
            <div class="askloadsec" style="display: flex;"><h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary" style="color: #fbbe2e;">button 2</h1>
                <input class = "color-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="askloadsec" name="askloadsec" value="#ffffff">
            </div>
        </div>
    </div>
    
    </div>
    <div class="sg-content-box__content sg-content-box__content--spaced-bottom-large" style="margin-bottom: 0px;display: flex;justify-content: center;">
    <button class="sg-button sg-button--m sg-button--solid-light" onclick="document.querySelector(&quot;div.modal&quot;).remove();" style="background:  #60d399!important; color: white;width: 100px;font-weight: 800;font-size: 15px;"><span class="sg-button__text">Save</span></button>
</div>
</div>
    </div>
    </div>
    </div>`;
    
    let ext = document.createElement("div");
    ext.innerHTML = `<div data-testid="game_box_extension" class="sg-flex sg-flex--align-items-center sg-flex--justify-content-space-between GameBoxCurrentPlan-module__container--2Royn sg-space-x-m"><div class="sg-flex sg-flex--column sg-space-y-xxs"><div class="sg-flex sg-flex--align-items-center sg-flex--justify-content-space-between"><div class="sg-flex"><div class="sg-text sg-text--xsmall sg-text--bold">Extension Options</div></div></div><div data-testid="game_box_current_plan_name" style = "display: inline-flex;" class="sg-text sg-text--gray sg-text--bold">
    <button class="theme homebut" id = "theme">
        <svg xmlns="http://www.w3.org/2000/svg" style="fill: white;" width="24" height="24" style = "fill: white;" viewBox="0 0 24 24"><path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z"/></svg>
    </button>
    <button id = "notif" class="notif homebut">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: white; height: 24px; width:17px;"><path fill="currentColor" d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"></path></svg>
    </button>
</div></div></div>`;

    //options on gamebox
    if (document.querySelector("div[data-testid = 'game_box_container'] > div[data-testid = 'game_box_current_plan_facade']") !== null){
            document.querySelector("div[data-testid = 'game_box_container'] > div[data-testid = 'game_box_current_plan_facade']").prepend(ext);
        }
        let opscript = "false";
        let colscript = "false";
    try{
    document.getElementById("theme").addEventListener("click",function(){
        document.querySelector("body").appendChild(thememodal);
        if(colscript === "false"){
            colorbox();
            colscript = "true";
        }
    });
    document.getElementById("modset").addEventListener("click",function(){
        document.querySelector("body").appendChild(modmodal);
        if(opscript === "false"){
            loadedoptions();
            opscript = "true";
        }
    document.getElementById('notif').addEventListener("click",function(){
        appendToFooter()
    });
    });
    }catch(err){};
}
function colorbox(){
    let primary = document.getElementsByClassName("color-input")[0]
    let secondary = document.getElementsByClassName("color-input")[1]
    let accent = document.getElementsByClassName("color-input")[2]
    let cherrybsm=  document.getElementById("cherrybsm")
    let savedPrimary = localStorage.getItem("--headerfooter")
    let savedSecondary = localStorage.getItem("--askloadsec")
    let savedAccent = localStorage.getItem("--ansbut")
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
        localStorage.setItem("--headerfooter",document.getElementsByClassName("color-input")[0].value);
        document.querySelector(':root').style.setProperty('--headerfooter',document.getElementsByClassName("color-input")[0].value);
    });
    secondary.addEventListener('change', function(){
        localStorage.setItem("--askloadsec",document.getElementsByClassName("color-input")[1].value);
        document.querySelector(':root').style.setProperty('--askloadsec',document.getElementsByClassName("color-input")[1].value);
    });
    accent.addEventListener('change', function(){
        localStorage.setItem("--ansbut",document.getElementsByClassName("color-input")[2].value);
        document.querySelector(':root').style.setProperty('--ansbut',document.getElementsByClassName("color-input")[2].value);
    });
    cherrybsm.addEventListener("click", function(){
        localStorage.setItem('--headerfooter', '#ffc7bf');
        localStorage.setItem('--askloadsec', '#4fb3f6');
        document.querySelector(':root').style.setProperty('--headerfooter','#ffc7bf');
        document.querySelector(':root').style.setProperty('--askloadsec','#4fb3f6');
        localStorage.setItem('--ansbut', '#FF7968');
        document.querySelector(':root').style.setProperty('--ansbut','#FF7968'); 
        primary.value = "#ffc7bf";
        secondary.value = "#4fb3f6";
        accent.value = "#FF7968";
    });
    hicont.addEventListener("click", function(){
        localStorage.setItem('--headerfooter', '#4fb3f6');
        localStorage.setItem('--askloadsec', '#fbbe2e');
        document.querySelector(':root').style.setProperty('--headerfooter','#4fb3f6');
        document.querySelector(':root').style.setProperty('--askloadsec','#fbbe2e');
        localStorage.setItem('--ansbut', '#FF7968');
        document.querySelector(':root').style.setProperty('--ansbut','#FF7968'); 
        primary.value = "#4fb3f6";
        secondary.value = "#fbbe2e";
        accent.value = "#FF7968";
    });
    hannah.addEventListener("click", function(){
        localStorage.setItem('--headerfooter', '#1b4b70');
        localStorage.setItem('--ansbut', '#4b7e94');
        localStorage.setItem('--askloadsec', '#4b7e94');
        document.querySelector(':root').style.setProperty('--headerfooter','#1b4b70');
        document.querySelector(':root').style.setProperty('--askloadsec','#4b7e94');
        document.querySelector(':root').style.setProperty('--ansbut','#4b7e94');
        primary.value = "#1b4b70";
        secondary.value = "#4b7e94";
        accent.value = "#4b7e94";
    });
}

function appendToFooter(){
    document.body.outerHTML = "<!DOCTYPE html><html><head><header class='HeaderController__header--3BXr6'><div class='HeaderController__limitWidth--2ORAB'><div class='HeaderController__innerwrap--1RjnZ'><div class='sg-flex sg-flex--align-items-center sg-flex--margin-right-m'><a href='/' data-testid='navigation_header_brainly_logo_link' class='HeaderController__logoLink--3xFry'><div data-testid='navigation_header_brainly_logo' class='sg-logo HeaderController__logo--1gT-T'><img class='sg-logo__image' src='https://styleguide.brainly.com/images/logos/brainly-5c4a769505.svg'></div></a></div><div class='HeaderController__search--32Q97' data-testid='navigation_header_search'><div class='sg-flex sg-flex--full-width Search__searchWrapper--2K-TQ'><form method='GET' action='/app/ask?source=topbar' class='Search__searchForm--3VpJx'><div class='sg-search sg-search--m sg-search--full-width'><input aria-label='Search' placeholder='Search for an answer to any question...' name='q' data-test='navigation_search' maxlength='2048' data-hj-whitelist='true' type='search' class='sg-input sg-input--with-icon sg-search__input' value=''><button class='sg-search__icon'><div class='sg-icon sg-icon--gray-secondary sg-icon--x16'><svg class='sg-icon__svg'><use xlink:href='#icon-search'></use></svg></div></button></div></form></div></div><div class='sg-flex sg-flex--align-items-center HeaderController__childrenWrapper--2o_0B'><div class='sg-flex sg-flex--align-items-center sg-space-x-xxs md:sg-space-x-s'><div class='sg-flex sg-flex--margin-left-s'><a data-testid='navigation_add_question' class='sg-button sg-button--m sg-button--transparent' href='/question/add?entry=6' role='button'><span class='sg-button__text'>Ask Question</span></a></div><div><div class='sg-flex sg-space-x-xxs md:sg-space-x-s'><div class='sg-flex'><div class='sg-flex' style='position: relative;'><button aria-label='' data-testid='navigation-nested-panel-button' class='sg-button sg-button--m sg-button--transparent sg-button--icon-only'><span class='sg-button__icon sg-button__icon--m'><div class='sg-icon sg-icon--adaptive sg-icon--x24'><svg class='sg-icon__svg'><use xlink:href='#icon-notifications'></use></svg></div></span><span class='sg-button__text'></span></button></div></div><div class='sg-flex'><div class='sg-flex' style='position: relative;'><button aria-label='profile' data-testid='navigation_profile_panel_button' class='sg-button sg-button--m sg-button--transparent sg-button--icon-only'><span class='sg-button__icon sg-button__icon--m'><div class='sg-avatar sg-avatar--xs'><img class='sg-avatar__image' src='https://us-static.z-dn.net/files/daa/792a6895f607fadea54b4f7f0e595617.png'></div></span><span class='sg-button__text'></span></button></div></div></div></div></div></div></div></div><div data-testid='navigation_header_subnav' class='HeaderController__subnav--gvKms js-ads-top-offset-element'><div class='HeaderController__limitWidth--2ORAB'><div class='HeaderController__subnavInner--10VQX'><div class='sg-flex sg-flex--full-height sg-flex--margin-left-xs'><div class='sg-flex sg-flex--full-height sg-flex--no-shrink sg-flex--align-items-center'><span class='SubNav__linkWrapper--3SFe0 SubNav__linkWrapperMargin--EbAv7'><a role='link' data-test='sub_navigaton_for_students' tabindex='0' href='/for-students?source=topbar' class='sg-text sg-text--small sg-text--link sg-text--bold sg-text--black sg-text--regular'>For students</a></span></div><div class='sg-flex sg-flex--full-height sg-flex--no-shrink sg-flex--align-items-center'><span class='SubNav__linkWrapper--3SFe0 SubNav__linkWrapperMargin--EbAv7'><a role='link' data-test='sub_navigaton_for_parents' tabindex='0' href='/for-parents?source=topbar' class='sg-text sg-text--small sg-text--link sg-text--bold sg-text--black sg-text--regular'>For parents</a></span></div><div class='sg-flex sg-flex--full-height sg-flex--no-shrink sg-flex--align-items-center'><span class='SubNav__linkWrapper--3SFe0 SubNav__linkWrapperMargin--EbAv7'><a role='link' data-test='sub_navigaton_for_teachers' tabindex='0' href='/schools-and-teachers?source=topbar' class='sg-text sg-text--small sg-text--link sg-text--bold sg-text--black sg-text--regular'>For teachers</a></span></div><div class='sg-flex sg-flex--full-height sg-flex--no-shrink sg-flex--align-items-center'><span class='SubNav__linkWrapper--3SFe0 SubNav__linkWrapperMargin--EbAv7'><a role='link' data-test='sub_navigaton_honor_code' tabindex='0' href='/honor-code?source=topbar' class='sg-text sg-text--small sg-text--link sg-text--bold sg-text--black sg-text--regular'>Honor code</a></span></div><div class='sg-flex sg-flex--full-height sg-flex--no-shrink sg-flex--align-items-center'><span class='SubNav__linkWrapper--3SFe0 SubNav__linkWrapperMargin--EbAv7'><a role='link' data-test='sub_navigaton_brainly_app' tabindex='0' href='/brainly-app?source=topbar' class='sg-text sg-text--small sg-text--link sg-text--bold sg-text--black sg-text--regular'>Brainly App</a></span></div><div class='sg-flex sg-flex--full-height sg-flex--no-shrink sg-flex--align-items-center'><span class='SubNav__linkWrapper--3SFe0'><a role='link' data-test='sub_navigaton_tutor' tabindex='0' href='/online-tutoring?source=topbar' class='sg-text sg-text--small sg-text--link sg-text--bold sg-text--black sg-text--regular'>Brainly Tutor</a></span></div></div></div></div></div></header></head><body class = 'notifcenter'><div class = 'selector'><select name='types' id='types'><option value='choose'>Category</option><option value='all'>All</option><option value='thanks'>Thanks ❤️</option><option value='comment'>Comments 💬</option><option value='answered'>Answers 📝</option><option value='lost'>Challenges 🤔</option><option value='expired'>Questions ❓</option><option value='brainliest'>Brainliest 👑</option><option value='deleted'>Deleted 🗑️</option></select></div></body>"
    document.getElementById("types").addEventListener("change",function(){
        let total = document.getElementsByClassName("filter")
          for (let i = 0; i < total.length; i++) {
              total[i].style.setProperty('display', 'none', 'important');
          }
          let imgs = document.getElementsByClassName("apdimg")
          for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.setProperty('display', 'none', 'important');
          }
        if (this.value === "all"){
            let imgs = document.getElementsByClassName("apdimg")
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].style.setProperty('display', 'inline-flex', 'important');
            }
            let total = document.getElementsByClassName("filter")
              for (let i = 0; i < total.length; i++) {
                total[i].style.setProperty('display', 'inline-flex', 'important');
              }
        }
        let all = document.getElementsByClassName(this.value)
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty('display', 'inline-flex', 'important');
        }
    })
    var data = JSON.stringify({
        "limit": 100,
        "last_id": null
      });
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          let jsn = JSON.parse(this.responseText)
          let items = jsn["data"]["items"]
          for (let i = 0; i < items.length; i++) {
            
            
            let uDataItems = jsn["users_data"]
            
            for (let i = 0; i < items.length; i++) {
                for (let x = 0; x < uDataItems.length; x++) {
                    if (String(uDataItems[x]["id"])===String(items[i]["user_id"])){
                       
                        const dv = document.createElement("div") 
                        dv.id = String(items[i]["user_id"])
                        dv.className = "divfilt"
                        dv.setAttribute("usable","true")
                        dv.setAttribute("nick",uDataItems[x]["nick"])
                        try{dv.setAttribute("question",jsn["data"]["items"][i]["model_id"])}catch(err){}
                        try{dv.setAttribute("avatar",uDataItems[x]["avatar"][64])}catch(err){}
                        let txt = document.createElement("p")
                        dv.addEventListener("click",function(){
                            if (dv.children[0].innerText.includes("thanks for the answer")){
                                window.open("https://brainly.com/question/"+this.getAttribute("question"), '_blank').focus();
                            }
                            if (dv.children[0].innerText.includes("comment")){
                                window.open("https://brainly.com/question/"+this.getAttribute("question"), '_blank').focus();
                            }
                            if (dv.children[0].innerText.includes("thanks for your help")){
                                window.open("https://brainly.com/profile/"+this.getAttribute("nick")+"-"+this.getAttribute("id"), '_blank').focus();
                            }
                            if (dv.children[0].innerText.includes("answered a question")){
                                window.open("https://brainly.com/question/"+this.getAttribute("question"), '_blank').focus();
                            }
                            if (dv.children[0].innerText.includes("Brainliest")){
                                window.open("https://brainly.com/question/"+this.getAttribute("question"), '_blank').focus();
                            }
                        })
                        dv.appendChild(txt)
                        
            
            
            if (String(items[i]["text"]).includes("thanks") === true){
                let username = txt.parentElement.getAttribute("nick")
                let avatarurl = txt.parentElement.getAttribute("avatar")
                if (avatarurl === undefined || avatarurl === null){
                    avatarurl = "https://brainly.com/img/avatars/100-ON.png"
                }
                txt.innerText = items[i]["text"].replace("%1$s",username)
                let pfp = document.createElement("div")
                pfp.style.position = "relative";
                let heartsvg = document.createElement("div")
                heartsvg.innerHTML = `<svg style = "position: absolute;bottom: 0px;right: 10px;fill: crimson;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>`
                txt.appendChild(pfp)
                pfp.innerHTML = '<img src='+avatarurl+' class="apdimg thanks"></img>'
                txt.className = "thanks filter"
                pfp.appendChild(heartsvg);
            } else if (String(items[i]["text"]).includes("comment") === true){
                //.replace("%1$s",items[i]["user_id"])
                let username = txt.parentElement.getAttribute("nick")
                let avatarurl = txt.parentElement.getAttribute("avatar")
                if (avatarurl === undefined || avatarurl === null){
                    avatarurl = "https://brainly.com/img/avatars/100-ON.png"
                }
                txt.innerText = items[i]["text"].replace("%1$s",username).replace("%2$s",items[i]["model_id"]).replace("%3$s",items[i]["model_id"])
                let pfp = document.createElement("div")
                pfp.style.position = "relative";
                let commentsvg = document.createElement("div")
                commentsvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style = "position: absolute;bottom: 0px;right: 10px;" width="20" height="20" viewBox="0 0 24 24"><path d="M0 1v16.981h4v5.019l7-5.019h13v-16.981h-24zm7 10c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z"/></svg>`
                pfp.className = "comment filter"
                txt.appendChild(pfp)
                pfp.innerHTML = '<img src='+avatarurl+' class="apdimg comment"></img>'
                txt.className = "comment filter"
                pfp.appendChild(commentsvg);
            } else if (String(items[i]["text"]).includes("delete") === true){
                let username = txt.parentElement.getAttribute("nick")
                let avatarurl = txt.parentElement.getAttribute("avatar")
                if (avatarurl === undefined || avatarurl === null){
                    avatarurl = "https://brainly.com/img/avatars/100-ON.png"
                }
                txt.innerText = items[i]["text"].replace("%1$s",username).replace("%2$s","")+" 🗑️" 
                let pfp = document.createElement("img")
                txt.appendChild(pfp)
                pfp.outerHTML = '<img src='+avatarurl+' class="apdimg delete"></img>'
                txt.className = "deleted filter"
            } else if (String(items[i]["text"]).includes("Seems like") === true){
                let username = txt.parentElement.getAttribute("nick")
                let avatarurl = txt.parentElement.getAttribute("avatar")
                if (avatarurl === undefined || avatarurl === null){
                    avatarurl = "https://brainly.com/img/avatars/100-ON.png"
                }
                txt.innerText = items[i]["text"].replace("%1$s",username)+" ⏰" 
                let pfp = document.createElement("img")
                txt.appendChild(pfp)
                pfp.outerHTML = '<img src='+avatarurl+' class="apdimg expired"></img>'
                txt.className = "expired filter"
            } else if (String(items[i]["text"]).includes("answered") === true){
                let username = txt.parentElement.getAttribute("nick")
                let avatarurl = txt.parentElement.getAttribute("avatar")
                if (avatarurl === undefined || avatarurl === null){
                    avatarurl = "https://brainly.com/img/avatars/100-ON.png"
                }
                txt.innerText = items[i]["text"].replace("%1$s",username).replace("%2$s",items[i]["model_id"])+" 📝" 
                let pfp = document.createElement("img")
                txt.appendChild(pfp)
                pfp.outerHTML = '<img src='+avatarurl+' class="apdimg answered"></img>'
                txt.className = "answered filter"
            } else if (String(items[i]["text"]).includes("beat") === true){
                let username = txt.parentElement.getAttribute("nick")
                let avatarurl = txt.parentElement.getAttribute("avatar")
                if (avatarurl === undefined || avatarurl === null){
                    avatarurl = "https://brainly.com/img/avatars/100-ON.png"
                }
                txt.innerText = items[i]["text"].replace("%1$s",username)+" 😔" 
                let pfp = document.createElement("img")
                txt.appendChild(pfp)
                pfp.outerHTML = '<img src='+avatarurl+' class="apdimg lost"></img>'
                txt.className = "lost filter"
            } else if (String(items[i]["text"]).includes("Brainliest") === true){
                let username = txt.parentElement.getAttribute("nick")
                let avatarurl = txt.parentElement.getAttribute("avatar")
                if (avatarurl === undefined || avatarurl === null){
                    avatarurl = "https://brainly.com/img/avatars/100-ON.png"
                }
                txt.innerText = items[i]["text"].replace("%1$s",username).replace("%2$s","on "+items[i]["model_id"])
                let pfp = document.createElement("div")
                pfp.style.position = "relative";
                let crownsvg = document.createElement("div")
                crownsvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style = "position: absolute;bottom: 0px;right: 10px;fill: #fbbe2e;" width="20" height="20" viewBox="0 0 24 24"><path d="M22 19v3h-20v-3h20zm0-15c-1.5 0-2.662 1.685-1.598 3.194.535.759.406 1.216.045 1.749-.765 1.127-1.872 2.057-3.447 2.057-2.521 0-3.854-2.083-4.131-3.848-.096-.614-.15-1.074.436-1.644.402-.39.695-.904.695-1.508 0-1.104-.896-2-2-2s-2 .896-2 2c0 .604.293 1.118.695 1.508.586.57.531 1.03.436 1.644-.277 1.765-1.61 3.848-4.131 3.848-1.575 0-2.682-.93-3.447-2.058-.362-.532-.491-.989.045-1.748 1.064-1.509-.098-3.194-1.598-3.194-1.104 0-2 .896-2 2 0 .797.464 1.495 1.144 1.808.825.38.856 1.317.856 2.171v7.021h20v-7.021c0-.854.031-1.792.856-2.171.68-.313 1.144-1.011 1.144-1.808 0-1.104-.896-2-2-2z"/></svg>`
                txt.appendChild(pfp)
                pfp.innerHTML = '<img src='+avatarurl+' class="apdimg brainliest"></img>'
                txt.className = "brainliest filter"
                pfp.appendChild(crownsvg)
            } else {
                let username = txt.parentElement.getAttribute("nick")
                let avatarurl = txt.parentElement.getAttribute("avatar")
                if (avatarurl === undefined || avatarurl === null){
                    avatarurl = "https://brainly.com/img/avatars/100-ON.png"
                }
                txt.innerText = items[i]["text"].replace("%1$s",username)
                let pfp = document.createElement("img")
                txt.appendChild(pfp)
                pfp.outerHTML = '<img src='+avatarurl+' class="apdimg default"></img>'
                txt.className = "default filter"
            }
            full.appendChild(dv)
                        
                    }
                }
            }
            
          }
        }
      });
      document.body.appendChild(full)
      xhr.open("POST", "https://brainly.com/api/28/api_notifications/view");
      xhr.setRequestHeader("authority", "brainly.com");
      xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"");
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
      xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36");
      xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
      xhr.setRequestHeader("origin", "https://brainly.com");
      xhr.setRequestHeader("sec-fetch-site", "same-origin");
      xhr.setRequestHeader("sec-fetch-mode", "cors");
      xhr.setRequestHeader("sec-fetch-dest", "empty");
      xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
      xhr.send(data);
}
async function f() {
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(appendButton()), 4500)
});
let result = await promise; // wait until the promise resolves (*)
}
f();
var timeoutId = window.setTimeout(function() {
    profile()
  }, 5000);

window.setInterval(function(){
    //plan name
    if (document.querySelector("div[data-testid = 'game_box_current_plan_facade'] > div[data-testid = 'game_box_current_plan'] > div > div[data-testid = 'game_box_current_plan_name']") !== null){
        document.querySelector("div[data-testid = 'game_box_current_plan_facade'] > div[data-testid = 'game_box_current_plan'] > div > div[data-testid = 'game_box_current_plan_name']").innerHTML = "Brainly Companion";
    }
}, 1000)
