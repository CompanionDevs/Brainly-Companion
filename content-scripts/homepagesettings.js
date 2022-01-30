function profile(){
    let thememodal = document.createElement("div");
    thememodal.classList.add("modal");

    thememodal.innerHTML = `


    <div class="modal-bg" style="background-color: rgba(79,179,246,0.8);position: fixed;height: 100%;width: 100%;top: 0;left: 0;display:flex; justify-content:center; align-items: center;z-index: 999;overflow-x: hidden;overflow-y: auto;">
        <div class="sg-toplayer__wrapper" style = "background: white;height: max-content;padding: 40px;width: max-content;border-radius: 10px;box-shadow: 0 3px 32px 0 rgb(2 10 27 / 15%);">
        <div class="sg-content-box" style="display: flex;justify-content: center;flex-direction: column;align-items: center; height: 100%; width: 100%;">
        <div class="sg-content-box__content sg-content-box__content--spaced-bottom-large" style="width: 100%;">
            <h2 class="sg-headline" style="font-size: 40px;color: #323C45;font-weight: 900;">Themes</h2>
        </div>
    <div class="theme-content" style="margin-bottom: 1.5rem;padding: 10px;border: 2px solid #c3d1dd;border-radius: 20px; position: relative;">
        <h1 class="sg-text-bit sg-text-bit--mint-primary" style="font-size: 22px;background: white;position: absolute;top: -21px;">Preset Themes</h1>
        <button id = "cherrybsm" class="sg-button sg-button--m sg-button--solid-light chrrybsm" style="background: #ffc7bf!important; color: white;"><span class="sg-button__text" style="font-weight: 900;background: #ffc7bf!important;color: white;font-size: 15px;margin: 10px;">Cherry Blossom</span></button>
        <button id = "hicont" class="sg-button sg-button--m sg-button--solid-light hicontrast" style="color: white; background: #4fc3f6!important;"><span class="sg-button__text" style="font-weight: 900;color: white;font-size: 15px;margin: 10px;">High-Contrast</span></button>
        <button id = "hannah" class="sg-button sg-button--m sg-button--solid-light hicontrast" style="color: white; background: #1b4b70!important;"><span class="sg-button__text" style="font-weight: 900;color: white;font-size: 15px;margin: 10px;">Dark Blue</span></button>
    </div>
    <div class="customtheme" style="border: 2px solid #c3d1dd;border-radius: 20px;width: max-content;padding: 10px;margin-bottom: 0.5rem;position: relative;">
        <h1 class="sg-text-bit sg-text-bit--mustard-primary" style="font-size: 22px;position: absolute;top: -20px;background: white;">Custom Theme</h1>
        <div class="custinp" style="width: max-content;display: flex;">
            <div class="headerfooter" style="margin-right: 10px;display: flex;border-right: 1px solid #c3d1dd;flex-direction: column;">
                <div style="display: flex;">
                    <h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary" style="font-size: 20px;">Header &amp; Footer</h1>
                    <input class="color-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="headerfooter" name="headerfooter" value="#ffffff">
                </div>
                <div style="display: flex;">
                    <h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary" style="font-size: 14px;">Text</h1>
                    <input class="text-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="headerfooter" name="headerfooterelem" value="#ffffff">
                </div>
            </div>
            <div class="ansbut" style="display: flex;border-right: 1px solid #c3d1dd;margin-right: 7px;flex-direction: column;">
                <div style="display: flex;">
                    <h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary" style="color: #60d399; font-size: 20px;">button 1</h1>
                    <input class="color-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="ansbut" name="ansbut" value="#ffffff">
                </div>
                <div style="display: flex;">
                    <h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary" style="color: #60d399; font-size: 14px;">text</h1>
                    <input class="text-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="ansbut" name="ansbut" value="#ffffff">
                </div>
            </div>
            <div class="askloadsec" style="display: flex;flex-direction: column;">
                <div style="display: flex;">
                    <h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary" style="color: #fbbe2e; font-size: 20px;">button 2</h1>
                    <input class="color-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="askloadsec" name="askloadsec" value="#ffffff">
                </div>
                <div style="display: flex;">
                    <h1 class="sg-text-bit sg-text-bit--small sg-text-bit--peach-primary" style="color: #fbbe2e;font-size: 14px;">text</h1>
                    <input class="text-input" type="color" style="width: 25px;margin-left: 5px;background: transparent;border: none;position: relative;top: -2px;" id="askloadsec" name="askloadsec" value="#ffffff">
                </div>
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

    <button class="notif homebut" id = "notif">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
    </button>

    </div></div></div>`;
    let notifmodal = document.createElement("div");
    notifmodal.classList.add("modal");
    notifmodal.id = "notification-stuff"
    notifmodal.innerHTML = `
    <div id = "notifmodal" class="modal-bg" style="background-color: rgba(79,179,246,0.8);position: fixed;height: 100%;width: 100%;top: 0;left: 0;display:flex; justify-content:center; align-items: center;z-index: 999;overflow-x: hidden;overflow-y: auto;">
        <div class="sg-toplayer__wrapper" style = "position:relative;background: white;height: 80%;padding: 24px;width: 50%;border-radius: 10px;box-shadow: 0 3px 32px 0 rgb(2 10 27 / 15%);padding-bottom: 12px;">

        <div class = "notif-top">
            <h2 class="sg-headline" style="font-size: 40px;color: #323C45;font-weight: 900;margin:5px;">Notifications</h2>
            <div class="sg-toplayer__close modalx" role="button" tabindex="0" onclick = "document.querySelector('#notification-stuff').remove()"><div class="sg-icon sg-icon--icon-gray-50 sg-icon--x24"><svg class="sg-icon__svg" role="img" aria-labelledby="title-close-mkl07i" focusable="false"><title id="title-close-mkl07i">close</title><use xlink:href="#icon-close" aria-hidden="true"></use></svg></div></div>
        </div>
        <div class = "notifications">
            <div class = "notification">
                <div class = "pfp"></div>
                <div class = "notif-content">
                    <div class = "notif-head"><h2 class="sg-headline sg-headline--small"></h2></div>
                </div>
            </div>
        </div>
        <div class = "notification-filters">
            <div class = "thanks"><?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-heart" width="24" height="24" viewBox="0 0 24 24"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /></svg></div>
            <div class = "comments"><div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg style = "height:26px; width:26px; fill:black;" class="sg-icon__svg" role="img" aria-labelledby="title-messages-36olv" focusable="false"><title id="title-messages-36olv">messages</title><use xlink:href="#icon-messages" aria-hidden="true"></use></svg></div></div>
            <div class = "brainliest"><div class="sg-flex sg-flex--margin-right-xxs"><div class="sg-icon sg-icon--icon-yellow-50 sg-icon--x16"><svg class="sg-icon__svg" role="img" aria-labelledby="title-crown-dryzk5" focusable="false" style = "height:24px; width:24px; fill:black;"><title id="title-crown-dryzk5">crown</title><use xlink:href="#icon-crown" aria-hidden="true"></use></svg></div></div></div>
        </div>
        </div>
    </div>
    `;

    //options on gamebox
        document.querySelector("div[data-testid = 'game_box']").appendChild(ext);
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
    document.getElementById('notif').addEventListener("click",function(){
        document.querySelector("body").appendChild(notifmodal);
        appendToFooter();
    });
    }catch(err){};
}
function colorbox(){
    let primary = document.getElementsByClassName("color-input")[0]
    let primarytxt = document.getElementsByClassName("text-input")[0]
    let secondary = document.getElementsByClassName("color-input")[1]
    let secondarytxt = document.getElementsByClassName("text-input")[1]
    let accent = document.getElementsByClassName("color-input")[2]
    let accenttxt = document.getElementsByClassName("text-input")[2]
    let cherrybsm=  document.getElementById("cherrybsm")
    let savedPrimary = localStorage.getItem("--headerfooter")
    let savedprimarytxt = localStorage.getItem("--headfootelem")
    let savedSecondary = localStorage.getItem("--askloadsec")
    let savedsecondarytxt = localStorage.getItem("--secelem")
    let savedAccent = localStorage.getItem("--ansbut")
    let savedaccenttxt = localStorage.getItem("--ansbutelem")
    if (savedPrimary !== undefined){
        primary.value = savedPrimary   
    }
    if (savedprimarytxt !== undefined){
        primarytxt.value = savedprimarytxt 
    }
    if (savedSecondary !== undefined){
        secondary.value = savedSecondary   
    }
    if (savedsecondarytxt !== undefined){
        secondarytxt.value = savedsecondarytxt
    }
    if (savedAccent !== undefined){
        accent.value = savedAccent   
    }
    if (savedaccenttxt !== undefined){
        accenttxt.value = savedaccenttxt  
    }
    primary.addEventListener('change', function(){
        localStorage.setItem("--headerfooter",document.getElementsByClassName("color-input")[0].value);
        document.querySelector(':root').style.setProperty('--headerfooter',document.getElementsByClassName("color-input")[0].value);
    });
    primarytxt.addEventListener('change', function(){
        localStorage.setItem("--headfootelem",document.getElementsByClassName("text-input")[0].value);
        document.querySelector(':root').style.setProperty('--headfootelem',document.getElementsByClassName("text-input")[0].value);
    });
    secondary.addEventListener('change', function(){
        localStorage.setItem("--askloadsec",document.getElementsByClassName("color-input")[1].value);
        document.querySelector(':root').style.setProperty('--askloadsec',document.getElementsByClassName("color-input")[1].value);
    });
    secondarytxt.addEventListener('change', function(){
        localStorage.setItem("--secelem",document.getElementsByClassName("text-input")[1].value);
        document.querySelector(':root').style.setProperty('--secelem',document.getElementsByClassName("text-input")[1].value);
    });
    accent.addEventListener('change', function(){
        localStorage.setItem("--ansbut",document.getElementsByClassName("color-input")[2].value);
        document.querySelector(':root').style.setProperty('--ansbut',document.getElementsByClassName("color-input")[2].value);
    });
    accenttxt.addEventListener('change', function(){
        localStorage.setItem("--ansbutelem",document.getElementsByClassName("text-input")[2].value);
        document.querySelector(':root').style.setProperty('--ansbutelem',document.getElementsByClassName("text-input")[2].value);
    });
    cherrybsm.addEventListener("click", function(){
        localStorage.setItem('--headerfooter', '#ffc7bf');
        localStorage.setItem('--askloadsec', '#4fb3f6');
        document.querySelector(':root').style.setProperty('--headerfooter','#ffc7bf');
        document.querySelector(':root').style.setProperty('--askloadsec','#4fb3f6');
        document.querySelector(':root').style.setProperty('--headfootelem','black');
        document.querySelector(':root').style.setProperty('--secelem','white');
        document.querySelector(':root').style.setProperty('--ansbutelem','white');
        localStorage.setItem('--headfootelem', 'black');
        localStorage.setItem('--secelem', 'white');
        localStorage.setItem('--ansbutelem', 'white');
        localStorage.setItem('--ansbut', '#FF7968');
        document.querySelector(':root').style.setProperty('--ansbut','#FF7968'); 
        primary.value = "#ffc7bf";
        secondary.value = "#4fb3f6";
        accent.value = "#FF7968";
        primarytxt.value = "black";
        document.getElementsByClassName("text-input")[1].value = "#ffffff";
        document.getElementsByClassName("text-input")[2].value = "#ffffff";
    });
    hicont.addEventListener("click", function(){
        localStorage.setItem('--headerfooter', '#4fb3f6');
        localStorage.setItem('--askloadsec', '#fbbe2e');
        document.querySelector(':root').style.setProperty('--headerfooter','#4fb3f6');
        document.querySelector(':root').style.setProperty('--askloadsec','#fbbe2e');
        localStorage.setItem('--ansbut', '#FF7968');
        localStorage.setItem('--headfootelem', 'black');
        localStorage.setItem('--secelem', 'white');
        localStorage.setItem('--ansbutelem', 'white');
        document.querySelector(':root').style.setProperty('--headfootelem','black');
        document.querySelector(':root').style.setProperty('--secelem','white');
        document.querySelector(':root').style.setProperty('--ansbutelem','white');
        document.querySelector(':root').style.setProperty('--ansbut','#FF7968'); 
        primary.value = "#4fb3f6";
        secondary.value = "#fbbe2e";
        accent.value = "#FF7968";
        primarytxt.value = "black";
        document.getElementsByClassName("text-input")[1].value = "#ffffff";
        document.getElementsByClassName("text-input")[2].value = "#ffffff";
    });
    hannah.addEventListener("click", function(){
        localStorage.setItem('--headerfooter', '#1b4b70');
        localStorage.setItem('--ansbut', '#4b7e94');
        localStorage.setItem('--askloadsec', '#4b7e94');
        localStorage.setItem('--headfootelem', 'white');
        localStorage.setItem('--secelem', 'white');
        localStorage.setItem('--ansbutelem', 'white');
        document.querySelector(':root').style.setProperty('--headfootelem','white');
        document.querySelector(':root').style.setProperty('--secelem','white');
        document.querySelector(':root').style.setProperty('--ansbutelem','white');
        document.querySelector(':root').style.setProperty('--headerfooter','#1b4b70');
        document.querySelector(':root').style.setProperty('--askloadsec','#4b7e94');
        document.querySelector(':root').style.setProperty('--ansbut','#4b7e94');
        primary.value = "#1b4b70";
        secondary.value = "#4b7e94";
        accent.value = "#4b7e94";
        primarytxt.value = "#ffffff";
        secondarytxt.value = "#ffffff";
        accenttxt.value = "#ffffff";
    });
}

//notifications
function appendToFooter(){
    var data = JSON.stringify({
        "limit": 500,
        "last_id": null
      });
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
          const parsed = JSON.parse(this.responseText);
          console.clear();
          console.log(parsed);
          document.querySelector(".notif-head > h2").innerHTML = parsed["data"]["items"]["0"]["text"];
        }
      });
      
      xhr.open("POST", "https://brainly.com/api/28/api_notifications/view");
      xhr.setRequestHeader("authority", "brainly.com");
      xhr.setRequestHeader("sec-ch-ua", "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"");
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
      xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36");
      xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
      xhr.setRequestHeader("origin", "https://brainly.com");
      xhr.setRequestHeader("sec-fetch-site", "same-origin");
      xhr.setRequestHeader("sec-fetch-mode", "cors");
      xhr.setRequestHeader("sec-fetch-dest", "empty");
      xhr.setRequestHeader("referer", "https://brainly.com/");
      xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
      xhr.setRequestHeader("cookie", "_gcl_au=1.1.1045807330.1639106286; _ga=GA1.2.59733081.1639106287; notice_behavior=implied,us; _hjid=1b581735-7fba-4927-ab75-8f52ccbf31ef; _fbp=fb.1.1639106286825.516240098; _hjSessionUser_37318=eyJpZCI6ImFjOTcwYTY4LTRkNjgtNTI3YS1iOTBlLWJhYjdhMzQzODdiMiIsImNyZWF0ZWQiOjE2MzkxMDYyODY4MTQsImV4aXN0aW5nIjp0cnVlfQ==; Zadanepl_cookie[Token][Guest]=6gZ0rEFTYahJkrNGXgbfsj2rxCpPSjewLU6UTfxEYOSf12uLV37KCIsMBcw6syVJqMSsJbTCofn1maYo; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; zadane_sid=7cabcd2cd671af065b6a88af2832b14a; __utmc=153832555; __utmz=153832555.1639109789.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __gads=ID=1c84c17618b6e486:T=1639110767:S=ALNI_Ma3AAhE-pVi4-EZ79unNCq-TcxYxQ; panoramaId_expiry=1639715568545; _cc_id=e78ffe171e7dbdbb062659e75c4eca35; panoramaId=f154ab358414c830ccacf30d4c2216d53938b50e1c0c54a631e16df41fa6c850; __stripe_mid=b344d615-d5fa-43a6-babc-01235542d2840baa31; notice_preferences=7:; notice_gdpr_prefs=0,1,2,3,4,5,6,7:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit 1,2,3,4,5,6,7,8; ocean_session=1640717867661.bnw11bz; first_visit=1640717870; myHash=0b41ed88584a27d9e0204223a6126ad1; g_state={\"i_l\":0}; Zadanepl_cookie[Token][Long]=yds7-4rPGaSZDiM3NemfXmnoHmZljan3B7K1A3QceIM%3D; authHash=b96a0c6ffe7f17012a01c4f61e2a8095; __qca=P0-799037457-1642172640183; __utma=153832555.59733081.1639106287.1642777911.1642880862.54; amp_f323ac=9N-VIj7zkgdDyLHvoc_IgF...1fq4s6cn0.1fq4ssee9.f.0.f; _gid=GA1.2.279152936.1643332513; _gaexp=GAX1.2.ZNvthDUMTWW3n3YUSdBWsg.19067.1!42tQUE41RzS58l3k2jldVw.19089.2!coG1fMUDRQekJMGgtI_snA.19089.0!2YYs0-dgQcarGPZiE8yqXw.19102.0!tNHxEzl4Q8mW8UtK8eYhSg.19104.1!qDKrWCMWRTmsS-ntHgonLw.19104.1!lbnLLY2qQwKAUttZPcn-7g.19112.0!0jNgxXjORqmPg5hlNQLLHg.19112.2; _dc_gtm_UA-43896087-1=1; Student_sub=True; Student=True; _hjIncludedInSessionSample=1; _hjSession_37318=eyJpZCI6Ijc3MzQ3YzYxLWZjZjgtNDJiNS04OGU0LTFjNTJhZDlkNDFmNCIsImNyZWF0ZWQiOjE2NDMzMzI1MTQxNjYsImluU2FtcGxlIjp0cnVlfQ==; _hjAbsoluteSessionInProgress=1; Zadanepl_cookie[isLoggedIn]=1; datadome=.9T2.NRc98FiPK555dDg3YSEf7Iqx9PxVdiGN.7cbZozs~wXEsE0VjOl-uPgTTFBmLkg8TeKnd9I-vWyt7qu3em.hpRZQbUznqSJ22YsvT.s4iauiCVi7SDT~243Jxmg");
      
      xhr.send(data);
}
//

async function f() {
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(appendButton()), 4500)
});
let result = await promise; // wait until the promise resolves (*)
}
f();
var timeoutId = window.setTimeout(function() {
    profile()
  }, 6000);

window.setInterval(function(){
    //plan name
    if (document.querySelector("div[data-testid = 'game_box_current_plan_facade'] > div[data-testid = 'game_box_current_plan'] > div > div[data-testid = 'game_box_current_plan_name']") !== null){
        document.querySelector("div[data-testid = 'game_box_current_plan_facade'] > div[data-testid = 'game_box_current_plan'] > div > div[data-testid = 'game_box_current_plan_name']").innerHTML = "Brainly Companion";
    }
}, 1000)
