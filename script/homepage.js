// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.


// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.
let area = document.querySelector("body > div.js-page-wrapper > div > div.sg-flex.sg-flex--column.js-feed > div.sg-layout > div > div.sg-layout__aside-content")

let url = window.location.href;
let webpage = String(window.location.host)
let market = webpage.split('.')[1];

if (url === "https://brainly." + market + "/") {

    async function f() {
        
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(loadedhome()), 5000)
            if (String(market) === "com"){
                let div = document.createElement("div")
            area.appendChild(div)
            div.outerHTML = '<div class="sg-box sg-box--padding-m sg-box--border-color-gray-secondary-lightest sg-box--border"><div class="sg-flex sg-flex--full-width sg-flex--margin-bottom-s"><div class="sg-flex sg-flex--align-items-flex-start sg-flex--margin-right-s"><div class="sg-icon sg-icon--mustard sg-icon--x24"><svg style="fill:black!important" class="sg-icon__svg"><use xlink:href="#icon-settings"></use></svg></div></div><div class="sg-flex sg-flex--align-items-flex-end"><h1 class="sg-headline sg-headline--small">Online Moderators</h1></div></div><div class="sg-content-box__content sg-content-box__content--spaced-top"><div class="sg-animation-fade-in-fast appendhere"> </div><div class="sg-content-box"></div></div></div></div>';
            

            function get(user,id){


                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                
                xhr.addEventListener("readystatechange", function() {
                if(this.readyState === 4) {
                    
                    
                        this.responseHTML = new DOMParser().parseFromString(this.responseText, "text/html")
                        
                        this.responseHTML.getElementsByClassName("green")[0].innerHTML
                        this.avatar = this.responseHTML.querySelector("#main-left > div.personal_info > div.header > div.avatar > a > img").src
                        this.usernameprofile = this.responseHTML.querySelector("#main-left > div.personal_info > div.header > div.info > div.info_top > span.ranking > h2 > a").innerHTML
                        this.rank = this.responseHTML.getElementsByClassName("rank")[0].children[0].children[0].innerHTML
                        this.link = this.responseHTML.getElementsByClassName("avatar")[0].children[0].href
                        this.online = this.responseHTML.getElementsByClassName("green")[0].innerHTML
                
                        if (this.online !== undefined && this.online !== null){
                        
                            
                                    
                                this.isOn = "true"
                                let nicks = document.getElementsByClassName("modname")
                                if (String(this.online) === "\nonline "){
                                    let ele = document.createElement("div")
                                    let contain = document.getElementsByClassName("appendhere")[0]
                                    contain.appendChild(ele)
                                    ele.outerHTML = '<div class="sg-content-box sg-content-box--full"><div class="sg-content-box__content sg-content-box__content--spaced-top-small"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div data-test="ranking-item-avatar" class="sg-avatar sg-avatar--spaced"><a ><img class="sg-avatar__image modimg" src="/img/avatars/100-ON.png"></a></div></div><div class="sg-actions-list__hole sg-actions-list__hole--grow"><a  class="sg-text sg-text--link-unstyled sg-text--bold"><span class="sg-text sg-text--small sg-text--gray sg-text--bold modname">User</span></a></div><div class="sg-actions-list__hole"><span class="sg-text sg-text--small sg-text--gray sg-text--bold modrank">Rank</span></div></div></div></div>'
                                    if (String(document.getElementsByClassName("modname")[0].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[0].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modname")[0].parentElement.href = this.link
                                        document.getElementsByClassName("modimg")[0].src = this.avatar
                                        
                                        document.getElementsByClassName("modrank")[0].innerHTML = this.rank
                                    } else if (String(document.getElementsByClassName("modname")[1].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[1].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modname")[1].parentElement.href = this.link
                                        
                                        document.getElementsByClassName("modimg")[1].src = this.avatar
                                        document.getElementsByClassName("modrank")[1].innerHTML = this.rank
                                    } else if (String(document.getElementsByClassName("modname")[2].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[2].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modname")[2].parentElement.href = this.link
                                        document.getElementsByClassName("modimg")[2].src = this.avatar
                                        document.getElementsByClassName("modrank")[2].innerHTML = this.rank
                                    } else if (String(document.getElementsByClassName("modname")[3].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[3].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modimg")[3].src = this.avatar
                                        document.getElementsByClassName("modname")[3].parentElement.href = this.link
                                        document.getElementsByClassName("modrank")[3].innerHTML = this.rank
                                    } else if (String(document.getElementsByClassName("modname")[4].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[4].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modimg")[4].src = this.avatar
                                        document.getElementsByClassName("modname")[4].parentElement.href = this.link
                                        document.getElementsByClassName("modrank")[4].innerHTML = this.rank
                                    }
                                    
                                }
                        
                                
                            
                    }
                
                    
                    
                
                    
                    }
                    });
                    
                    xhr.open("GET", "https://brainly.com/profile/"+user+"-"+id+"");
                    xhr.send();
                    
                }
                
                //Supermods
                get("user","15184511")
                get("user","13760331")
                get("user","11407043")
                get("user","154530")
                get("user","9952407")
                get("user","23779612")
                //Sr.Mods
                get("user","6410374")
                get("user","16118329")
                get("user","17431463")
                //Full Mods
                get("user","13095222")
                get("user","5136923")
                get("user","822326")
                get("user","604367")
                get("user","15709764")
                get("user","18208277")
                get("user","14062873")
                get("user","20709469")
                get("user","21404664")
                get("user","22639771")
                get("user","15026824")
                get("user","23770139")
                get("user","24545328")
                get("user","19481102")
                get("user","23432485")
                get("user","24363105")
                get("user","7078691")
                get("user","16002335")
                get("user","37709993")
                get("user","35394502")
                get("user","22104740")
                get("user","17601532")
                //JMS
                get("user","42128960")
                get("user","43307304")
                get("user","43527634")
                get("user","16192567")
                get("user","16192567")
                get("user","24007838")
            }
        });

        let result = await promise; // wait until the promise resolves (*)
        


    }

    f();
  
}






if (url.includes("/app/profile")) {
    async function f() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(loadednew()), 1500)

        });

        let result = await promise; // wait until the promise resolves (*)

    }

    f();

}
if (url.includes("question") === true) {
    //pass

}





let asked = null;

function loadedhome() {
    

    function report_content(mynum, iterate) {
        
        if (mynum !== "0") {
            console.log(mynum)
            console.log(iterate)
            
            
            urlrep = document.getElementsByClassName("brn-feed-item__content")[iterate -1].children[0].children[0].href
            
            console.log(urlrep)
            reasons_dictionary = {
                "1": "'Request a link or scan'",
                "2": "'Link to an unknown website'",
                "3": "'Reference link'",
                "4": "'Link to a provider'",
                "5": "'No Question'",
                "6": "'Incomplete Question'",
                "7": "'Too complex'",
                "8": "'Illogical Question'",
                "9": "'Too Trivial'",
                "10": "'Swear Words'",
                "11": "'Adult Content'",
                "12": "'Wrong Subject'",
                "13": "'Website Ad'",
                "14": "'Personal Info'",
                "15": "'Live Quiz'",
            };

            let rsn_no = String(mynum);
            let textrsn = reasons_dictionary[rsn_no];


            let conf = confirm("Are you sure you'd like to report this question with the reason " + textrsn + "?")




            var main;
            var sub;
            if (rsn_no === "1") {
                main = 1
                sub = 1
            }
            if (rsn_no === "2") {
                main = 1
                sub = 2
            }
            if (rsn_no === "3") {
                main = 1
                sub = 3
            }
            if (rsn_no === "4") {
                main = 1
                sub = 4
            }
            if (rsn_no === "5") {
                main = 2
                sub = 5
            }
            if (rsn_no === "6") {
                main = 2
                sub = 6
            }
            if (rsn_no === "7") {
                main = 2
                sub = 7
            }
            if (rsn_no === "8") {
                main = 2
                sub = 8
            }
            if (rsn_no === "9") {
                main = 2
                sub = 9
            }
            if (rsn_no === "10") {
                main = 3
                sub = 10
            }
            if (rsn_no === "11") {
                main = 3
                sub = 11
            }
            if (rsn_no === "12") {
                main = 4
                sub = null;
            }
            if (rsn_no === "13") {
                main = 5
                sub = null;
            }
            if (rsn_no === "14") {
                main = 6
                sub = null;
            }
            if (rsn_no === "15") {
                main = 7
                sub = null;
            }

            let p1 = urlrep.replace("https://brainly." + market + "/question/", "")
            let p2 = p1.substring(0, 8)

            let num = parseInt(p2, 10);

            var data = JSON.stringify({
                "abuse": {
                    "category_id": main,
                    "subcategory_id": sub,
                    "data": null
                },
                "model_id": num,
                "model_type_id": 1
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                }
            });
            if (conf === true) {
                xhr.open("POST", "https://brainly." + market + "/api/28/api_moderation/abuse_report");
                xhr.setRequestHeader("authority", "brainly." + market + "");
                xhr.setRequestHeader("pragma", "no-cache");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"");
                xhr.setRequestHeader("accept", "application/json");
                xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
                xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36");
                xhr.setRequestHeader("content-type", "application/json");
                xhr.setRequestHeader("origin", "https://brainly." + market + "");
                xhr.setRequestHeader("sec-fetch-site", "same-origin");
                xhr.setRequestHeader("sec-fetch-mode", "cors");
                xhr.setRequestHeader("sec-fetch-dest", "empty");
                xhr.setRequestHeader("referer", "https://brainly." + market + "/question/" + num + "?answeringSource=feedPublic%2FhomePage%2F1");
                xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
                
            
                xhr.send(data);
            } else {
                //pass
            }




        }

    }
    let ask = document.querySelector(".sg-button__text")
    let panel = document.getElementsByClassName("brn-feed-item__footer")
    var i;
    for (i = 0; i < panel.length + 1; i++) {
        let report = document.createElement("button")
        let ticket = document.createElement("button")
        if (i !== 0) {
            let section = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child(" + i + ") > div > div > div.brn-feed-item__footer > div > div")
            let question = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child(" + i +") > div > div")
            if (section.id === "") {
                question.appendChild(report)
                const button = "report" + i
                const constant = i

                report.outerHTML = '<div class="dropdown"><button id="report' + i + '" style="margin-left:10px;   background-color: #fbbe2e; color:black; border-color:#fbbe2e; border-style:solid; border-width:2px; position: absolute; top: -20px; right: -15px;box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%), 0 3px 5px 0 rgb(0 0 0 / 10%); width: 40px; height:40px; border-radius: 50px; "title="report" class="sg-button sg-button--s sg-button--solid" data-dashlane-rid="eeafbc4ae5f8b942" data-form-type=""><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16" style = "position: relative; left:35%;"><svg class="sg-icon__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1"><defs><path d="M31.6663935,9.99965878 L23.999992,9.99965878 L23.5999922,7.99963148 C23.4429139,7.22287565 22.7596481,6.66481276 21.9671807,6.66601757 L10.0000005,6.66601757 C9.08061266,6.66902333 8.33616811,7.41382751 8.33359528,8.33322978 L8.33359528,33.333571 C8.33359528,34.2539143 9.07967031,35 10.0000005,35 C10.9203307,35 11.6664057,34.2539143 11.6664057,33.333571 L11.6664057,23.3334345 L20.9999938,23.3334345 L21.3999936,25.3334618 C21.5514803,26.1134618 22.2382799,26.6740824 23.0328051,26.6662925 L31.6663935,26.6662925 C32.5857827,26.6637196 33.3305763,25.9192645 33.33358,24.9998635 L33.33358,11.6660878 C33.3305763,10.7466868 32.5857827,10.0022316 31.6663935,9.99965878 Z M14.9999975,18.3333663 C14.9999975,19.2539253 14.2537475,20.0001859 13.3332016,20.0001859 C12.4126557,20.0001859 11.6664057,19.2539253 11.6664057,18.3333663 L11.6664057,11.6660878 C11.6664057,10.7455287 12.4126557,9.99926815 13.3332016,9.99926815 C14.2537475,9.99926815 14.9999975,10.7455287 14.9999975,11.6660878 L14.9999975,18.3333663 Z" id="path-1"/></defs><g id="Icon/Social/report_flag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><mask id="mask-2" fill="white"><use xlink:href="#path-1"/></mask><use id="Shape" fill="white" fill-rule="nonzero" xlink:href="#path-1"/><g id="Group" mask="url(#mask-2)" fill="white"><g id="symbolInstance"><rect id="color-mask-box" x="0" y="0" width="40" height="40"/></g></g></g></svg></div></span><div class = "dropdown-content"><a class="report_element"id="'+i+'1">Request for link or scan</a><a class="report_element"id="'+i+'2">Link to an unknown website</a><a class="report_element"id="'+i+'3">Reference link</a><a class="report_element"id="'+i+'4">Link to a provider of hosting</a><a class="report_element"id="'+i+'5">No question content</a><a class="report_element"id="'+i+'6">Incomplete question content</a><a class="report_element"id="'+i+'7">Too complex</a><a class="report_element"id="'+i+'8">Illogical question</a><a class="report_element"id="'+i+'9">Too Trivial</a><a class="report_element" id="'+i+'10">Swear Words</a><a class="report_element" id="'+i+'11">Adult Content</a><a class="report_element" id="'+i+'12">Wrong Subject</a><a class="report_element" id="'+i+'13">Website Ad</a><a class="report_element" id="'+i+'14">Personal Info</a><a class="report_element" id="'+i+'15">Live Quiz</a></div></button></div>'


                let selectr = "selected"
                section.id = "appended"

                document.getElementById(i+"1").addEventListener("click", function go(){report_content("1",constant)});
                document.getElementById(i+"2").addEventListener("click", function go(){report_content("2",constant)});
                document.getElementById(i+"3").addEventListener("click", function go(){report_content("3",constant)});
                document.getElementById(i+"4").addEventListener("click", function go(){report_content("4",constant)});
                document.getElementById(i+"5").addEventListener("click", function go(){report_content("5",constant)});
                document.getElementById(i+"6").addEventListener("click", function go(){report_content("6",constant)});
                document.getElementById(i+"7").addEventListener("click", function go(){report_content("7",constant)});
                document.getElementById(i+"8").addEventListener("click", function go(){report_content("8",constant)});
                document.getElementById(i+"9").addEventListener("click", function go(){report_content("9",constant)});
                document.getElementById(i+"10").addEventListener("click", function go(){report_content("10",constant)});
                document.getElementById(i+"11").addEventListener("click", function go(){report_content("11",constant)});
                document.getElementById(i+"12").addEventListener("click", function go(){report_content("12",constant)});
                document.getElementById(i+"13").addEventListener("click", function go(){report_content("13",constant)});
                document.getElementById(i+"14").addEventListener("click", function go(){report_content("14",constant)});
                document.getElementById(i+"15").addEventListener("click", function go(){report_content("15",constant)});

            } else {
                //pass
            }




        }

    }


}
var intervalId = window.setInterval(function() {
    loadedhome()
}, 500);



function loadednew() {

    function report_content(report_num , mynum) {
        console.log(report_num)
        if (report_num !== "0") {
            let urlrep = String(document.getElementById("report"+mynum).parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[0].children[0].href)
            reasons_dictionary = {
                "1": "'Request a link or scan'",
                "2": "'Link to an unknown website'",
                "3": "'Reference link'",
                "4": "'Link to a provider'",
                "5": "'No Question'",
                "6": "'Incomplete Question'",
                "7": "'Too complex'",
                "8": "'Illogical Question'",
                "9": "'Too Trivial'",
                "10": "'Swear Words'",
                "11": "'Adult Content'",
                "12": "'Wrong Subject'",
                "13": "'Website Ad'",
                "14": "'Personal Info'",
                "15": "'Live Quiz'",
            };

            let rsn_no = String(report_num);
            let textrsn = reasons_dictionary[rsn_no];


            let conf = confirm("Are you sure you'd like to report this question with the reason " + textrsn + "?")




            var main;
            var sub;
            if (rsn_no === "1") {
                main = 1
                sub = 1
            }
            if (rsn_no === "2") {
                main = 1
                sub = 2
            }
            if (rsn_no === "3") {
                main = 1
                sub = 3
            }
            if (rsn_no === "4") {
                main = 1
                sub = 4
            }
            if (rsn_no === "5") {
                main = 2
                sub = 5
            }
            if (rsn_no === "6") {
                main = 2
                sub = 6
            }
            if (rsn_no === "7") {
                main = 2
                sub = 7
            }
            if (rsn_no === "8") {
                main = 2
                sub = 8
            }
            if (rsn_no === "9") {
                main = 2
                sub = 9
            }
            if (rsn_no === "10") {
                main = 3
                sub = 10
            }
            if (rsn_no === "11") {
                main = 3
                sub = 11
            }
            if (rsn_no === "12") {
                main = 4
                sub = null;
            }
            if (rsn_no === "13") {
                main = 5
                sub = null;
            }
            if (rsn_no === "14") {
                main = 6
                sub = null;
            }
            if (rsn_no === "15") {
                main = 7
                sub = null;
            }

            let p1 = urlrep.replace("https://brainly." + market + "/question/", "")
            let p2 = p1.substring(0, 8)

            let num = parseInt(p2, 10);

            var data = JSON.stringify({
                "abuse": {
                    "category_id": main,
                    "subcategory_id": sub,
                    "data": null
                },
                "model_id": num,
                "model_type_id": 1
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                }
            });
            if (conf === true) {
                xhr.open("POST", "https://brainly." + market + "/api/28/api_moderation/abuse_report");
                xhr.setRequestHeader("authority", "brainly." + market + "");
                xhr.setRequestHeader("pragma", "no-cache");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"");
                xhr.setRequestHeader("accept", "application/json");
                xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
                xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36");
                xhr.setRequestHeader("content-type", "application/json");
                xhr.setRequestHeader("origin", "https://brainly." + market + "");
                xhr.setRequestHeader("sec-fetch-site", "same-origin");
                xhr.setRequestHeader("sec-fetch-mode", "cors");
                xhr.setRequestHeader("sec-fetch-dest", "empty");
                xhr.setRequestHeader("referer", "https://brainly." + market + "/question/" + num + "?answeringSource=feedPublic%2FhomePage%2F1");
                xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
                xhr.send(data)
            } else {
                //pass
            }




        }

    }
    
   



    

   
    
    
    let questions = document.getElementsByClassName("sg-box sg-box--light sg-box--padding-s sg-box--border-color-gray-secondary-lightest sg-box--border UserActivity__contentItem--1KqFU")
    
    let r = 0;
    
    for (r = 0; r < questions.length + 1; r++) {
        
        let report = document.createElement("button")
        let ticket = document.createElement("button")
        
        if (r !== 0) {
            
            let section = document.querySelector("body > div.js-page-wrapper > div > div.js-react-single-page-entry > div.sg-layout > div.sg-layout__container.sg-layout__container--reversed-order.sg-layout__container--no-margin-top > div.sg-layout__content.ProfilePage__container--3mI4J > main > div > div:nth-child(2) > div > div:nth-child("+r+") > div > div.sg-flex.sg-flex--full-width.sg-flex--align-items-flex-end.sg-flex--justify-content-flex-end")
            let question = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child(" + i +") > div > div")
            if (section.id === "") {
                
                if (window.location.href.includes("questions") === true){
                    question.appendChild(report)
                }
                
                const button = "report" + r
                const constant = r



                report.outerHTML = '<div class="dropdown"><button id="report' + i + '" style="margin-left:10px;   background-color: #fbbe2e; color:black; border-color:#fbbe2e; border-style:solid; border-width:2px; position: absolute; top: -20px; right: -15px;box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%), 0 3px 5px 0 rgb(0 0 0 / 10%); width: 40px; height:40px; border-radius: 50px; "title="report" class="sg-button sg-button--s sg-button--solid" data-dashlane-rid="eeafbc4ae5f8b942" data-form-type=""><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16" style = "position: relative; left:35%;"><svg class="sg-icon__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1"><defs><path d="M31.6663935,9.99965878 L23.999992,9.99965878 L23.5999922,7.99963148 C23.4429139,7.22287565 22.7596481,6.66481276 21.9671807,6.66601757 L10.0000005,6.66601757 C9.08061266,6.66902333 8.33616811,7.41382751 8.33359528,8.33322978 L8.33359528,33.333571 C8.33359528,34.2539143 9.07967031,35 10.0000005,35 C10.9203307,35 11.6664057,34.2539143 11.6664057,33.333571 L11.6664057,23.3334345 L20.9999938,23.3334345 L21.3999936,25.3334618 C21.5514803,26.1134618 22.2382799,26.6740824 23.0328051,26.6662925 L31.6663935,26.6662925 C32.5857827,26.6637196 33.3305763,25.9192645 33.33358,24.9998635 L33.33358,11.6660878 C33.3305763,10.7466868 32.5857827,10.0022316 31.6663935,9.99965878 Z M14.9999975,18.3333663 C14.9999975,19.2539253 14.2537475,20.0001859 13.3332016,20.0001859 C12.4126557,20.0001859 11.6664057,19.2539253 11.6664057,18.3333663 L11.6664057,11.6660878 C11.6664057,10.7455287 12.4126557,9.99926815 13.3332016,9.99926815 C14.2537475,9.99926815 14.9999975,10.7455287 14.9999975,11.6660878 L14.9999975,18.3333663 Z" id="path-1"/></defs><g id="Icon/Social/report_flag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><mask id="mask-2" fill="white"><use xlink:href="#path-1"/></mask><use id="Shape" fill="white" fill-rule="nonzero" xlink:href="#path-1"/><g id="Group" mask="url(#mask-2)" fill="white"><g id="symbolInstance"><rect id="color-mask-box" x="0" y="0" width="40" height="40"/></g></g></g></svg></div></span><div class = "dropdown-content"><a class="report_element"id="'+i+'1">Request for link or scan</a><a class="report_element"id="'+i+'2">Link to an unknown website</a><a class="report_element"id="'+i+'3">Reference link</a><a class="report_element"id="'+i+'4">Link to a provider of hosting</a><a class="report_element"id="'+i+'5">No question content</a><a class="report_element"id="'+i+'6">Incomplete question content</a><a class="report_element"id="'+i+'7">Too complex</a><a class="report_element"id="'+i+'8">Illogical question</a><a class="report_element"id="'+i+'9">Too Trivial</a><a class="report_element" id="'+i+'10">Swear Words</a><a class="report_element" id="'+i+'11">Adult Content</a><a class="report_element" id="'+i+'12">Wrong Subject</a><a class="report_element" id="'+i+'13">Website Ad</a><a class="report_element" id="'+i+'14">Personal Info</a><a class="report_element" id="'+i+'15">Live Quiz</a></div></button></div>'
                let selectr = "selected"
                section.id = "appended"
                
                document.getElementById(i+"1").addEventListener("click", report_content("1"));
                document.getElementById(i+"2").addEventListener("click", report_content("2"));
                document.getElementById(i+"3").addEventListener("click", report_content("3"));
                document.getElementById(i+"4").addEventListener("click", report_content("4"));
                document.getElementById(i+"5").addEventListener("click", report_content("5"));
                document.getElementById(i+"6").addEventListener("click", report_content("6"));
                document.getElementById(i+"7").addEventListener("click", report_content("7"));
                document.getElementById(i+"8").addEventListener("click", report_content("8"));
                document.getElementById(i+"9").addEventListener("click", report_content("9"));
                document.getElementById(i+"10").addEventListener("click", report_content("10"));
                document.getElementById(i+"11").addEventListener("click", report_content("11"));
                document.getElementById(i+"12").addEventListener("click", report_content("12"));
                document.getElementById(i+"13").addEventListener("click", report_content("13"));
                document.getElementById(i+"14").addEventListener("click", report_content("14"));
                document.getElementById(i+"15").addEventListener("click", report_content("15"));

            } else {
                //pass
            }




        }

    }



}
