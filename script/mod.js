//document.querySelector("#DelUserAddForm > div.submit > input").style.backgroundColor = "#FF7968"
//document.querySelector("#DelUserAddForm > div.submit > input").style.color = "white"
//let show = document.querySelector("#main-left > div.personal_info > div.mod-profile-panel > span.pseudolink.user-more-data")
//show.click();
let web = String(window.location.host)
let mark = web.split('.')[1];

try {
    //let box = document.querySelector("#DelUserReason")
    //box.outerHTML = '<input style="width: 210px;     height: 50px;" name="data[DelUser][reason]" cols="10" rows="3" id="DelUserReason"></input>';
    //document.querySelector("#profile-mod-panel > ul:nth-child(1) > li:nth-child(3) > span").click();
} catch(err){
    //pass
}
let eles = document.getElementsByClassName("task ")
let p;
for (p = 0; p < eles.length + 1; p++) {
    let report = document.createElement("button")
    let ticket = document.createElement("button")
    if (p !== 0) {
        let section = document.querySelector("#tasks-solved > ol > li:nth-child("+p+")")
        if (section.id === "") {
            if (window.location.href.includes("submitted") === true){
                section.appendChild(report)
            }
            
            const button = "report" + p
            const constant = p
            let isadmin = localStorage.getItem("0576474418")
            if (isadmin === "true") {
                if (window.location.href.includes("submitted") === true){
                    section.appendChild(ticket)
                }
                

                try{
                    ticket.outerHTML = '<button title="delete" id="delete' + p + '" style="margin-left:15px; width: 100px; background-color:#2fc3f6; color:black; border-width:2px; border:none; border-color:transparent; border-radius: 20px;" class="sg-button sg-button--s sg-button--solid"><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16"></div></span><span class="sg-button__text">Delete</span><select id="delr' + constant + '"  style="border-color:transparent; background-color:#2fc3f6; width: 15px;margin-left: 7.6px; margin-top: 7px; max-height: 16px; "><option value="0" selected="selected" disabled="disabled">Select a reason</option><option value="1">Too Many Questions</option><option value="2">Link in Question</option><option value="3">Essay or Project</option><option value="4">Too Trivial</option><option value="5">Brainly-Related Question</option><option value="6">Wrong Subject</option><option value="8">Default</option><option value="9">Not English</option><option value="10">Multiple Posting</option><option value="12">Personal Information</option>><option value="13">Self Harm\</option><option value="14">Unclear Question</option><option value="15">Unclear Attatchment</option><option value="16">Too General</option><option value="17">Incomplete Question</option><option value="18">Not a School Problem (NO WARN)</option></select></button>'
                    const delx = "delete" + p
                    document.getElementById(delx).addEventListener("click", function() {

                        remove(constant)
                    });
                } catch(err){
                    console.warn(err)
                    //pass
                }
                
                
            }


            try{
                report.outerHTML = '<button id="report' + p + '" style="margin-left:10px; width:100px;  background-color: #FF7968; color:black; border-color:transparent; border-style:solid; border: none; border-radius: 20px; border-width:2px; "title="report" class="sg-button sg-button--s sg-button--solid" data-dashlane-rid="eeafbc4ae5f8b942" data-form-type=""><span class="sg-button__icon sg-button__icon--s"></span><span class="sg-button__text">Report</span><select id="rsn' + constant + '" style="width: 15px;margin-left: 7.6px; margin-top: 7px; max-height: 16px; background-color:transparent; border-color:transparent;"><option value="0" selected="selected" disabled="disabled">Select a reason</option><option value="1">Request for link or scan</option><option value="2">Link to an unknown website</option><option value="3">Reference link</option><option value="4">Link to a provider of hosting</option><option value="5">No question content</option><option value="6">Incomplete question content</option><option value="7">Too complex</option><option value="8">Illogical question</option><option value="9">Too Trivial</option><option value="10">Swear Words</option><option value="11">Adult Content</option><option value="12">Wrong Subject</option>><option value="13">Website Ad</option><option value="14">Personal Info</option><option value="15">Live Quiz</option></select></button>';
                document.getElementById(button).addEventListener("click", function() {
                    reasons(constant)
                });
    
                document.getElementById(button).addEventListener("click", function() {
                    document.getElementById("rsn" + constant).click();
                });
                document.getElementById("rsn" + constant).addEventListener("change", function() {
                    reasons(constant)
                });
            } catch(err){
                console.warn(err)
                //pass
            }
            



            let selectr = "selected"
            section.id = "appended"



            
        } else {
            //pass
        }




    }

}
/*
document.getElementById("DelUserReason").placeholder = "Any reason for deletion?"
document.getElementById("DelUserReason").style.height = "Any reason for deletion?"

let e = document.getElementById("DelUserReason")
var d = document.createElement('textarea');
d.innerHTML = e.innerHTML;
d.placeholder = e.placeholder;
d.className = e.className;
d.id = e.id;
e.parentNode.replaceChild(d, e);
*/
function reasons(mynum) {

    let selected = document.getElementById("rsn" + mynum)

    if (selected.value !== "0") {
        let urlrep = String(document.getElementById("report" + mynum).parentElement.children[1].children[0].href)

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

        let rsn_no = String(selected.value);
        let textrsn = reasons_dictionary[rsn_no];


        let conf = confirm("Are you sure you'd like to report this question with the reason " + textrsn + "?")




        var main;
        var sub;
        if (selected.value === "1") {
            main = 1
            sub = 1
        }
        if (selected.value === "2") {
            main = 1
            sub = 2
        }
        if (selected.value === "3") {
            main = 1
            sub = 3
        }
        if (selected.value === "4") {
            main = 1
            sub = 4
        }
        if (selected.value === "5") {
            main = 2
            sub = 5
        }
        if (selected.value === "6") {
            main = 2
            sub = 6
        }
        if (selected.value === "7") {
            main = 2
            sub = 7
        }
        if (selected.value === "8") {
            main = 2
            sub = 8
        }
        if (selected.value === "9") {
            main = 2
            sub = 9
        }
        if (selected.value === "10") {
            main = 3
            sub = 10
        }
        if (selected.value === "11") {
            main = 3
            sub = 11
        }
        if (selected.value === "12") {
            main = 4
            sub = null;
        }
        if (selected.value === "13") {
            main = 5
            sub = null;
        }
        if (selected.value === "14") {
            main = 6
            sub = null;
        }
        if (selected.value === "15") {
            main = 7
            sub = null;
        }

        let p1 = urlrep.replace("https://brainly." + mark + "/question/", "")
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
                let respa = JSON.parse(this.responseText);
                if (respa["success"] === true) {
                    let list = document.querySelector("#tasks-solved > ol")
                    let question = list.children[mynum - 1]
                    question.style.backgroundColor = "#FFF3D6"
                }
            }
        });
        if (conf === true) {
            xhr.open("POST", "https://brainly." + mark + "/api/28/api_moderation/abuse_report");
            xhr.setRequestHeader("authority", "brainly." + mark + "");
            xhr.setRequestHeader("pragma", "no-cache");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"");
            xhr.setRequestHeader("accept", "application/json");
            xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
            xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("origin", "https://brainly." + mark + "");
            xhr.setRequestHeader("sec-fetch-site", "same-origin");
            xhr.setRequestHeader("sec-fetch-mode", "cors");
            xhr.setRequestHeader("sec-fetch-dest", "empty");
            xhr.setRequestHeader("referer", "https://brainly." + mark + "/question/" + num + "?answeringSource=feedPublic%2FhomePage%2F1");
            xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
            xhr.setRequestHeader("cookie", "_ga=GA1.2.211202751.1620608511; _hjid=eaeac083-d704-41d2-ba08-8be74afa6a65; _fbp=fb.1.1620608511315.877960442; __qca=P0-1877865342-1620608511264; _pbjs_userid_consent_data=3524755945110770; G_ENABLED_IDPS=google; Zadanepl_cookie[Token][Long]=Hs4xBkwiEtDVd1mIUNN4__TFcdikbd7jNgRkU-iRsG4%3D; hl=en_US; first_visit=1620609257; _gcl_au=1.1.822710551.1621184964; Zadanepl_cookie[Token][Guest]=C9h7gHYDFpr0XHFOQu7SZ77rd15LlLMh3WSkbcEmnDEn0V25GbmXLgMJeWtr8oomUEt7jEjrkMuwN17g; cnx_userId=5768603e29a04fbb9cdb8e4e23644448; ubvs=b4be9dcc-86ae-42a5-a779-03e4dc124bdb; _cc_id=bd2009932fcb784f15ea420d7c4984c6; __utmz=153832555.1626113388.107.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); viewer_uid=Skc2WTN0aTJmUHpyWDFYSlAzdTZONjBQbU9lenNYekNlWXdXZldqOUFEST0tLTl3R2tCdDlEaGovQTc4bVp6aGU2cEE9PQ%3D%3D--de1f173b5fe41d34c75a2f0c74f2a561642b9b61; _lr_env_src_ats=false; idl_env=AuqW0_o1c_hLHVdjlxOnLK0yk27ESnb_wcxfwT0hAHz7XB16rnqe9043ppdpppZG2nB7mVFbwUt2bkyB-GwTPqfOcIe61ms5bXly; _gid=GA1.2.2026522036.1628538953; _gaexp=GAX1.2.sx1URVOyRTaGOZxjVmhDPw.18878.1u0021okAreRLPTDSPY91XftuZ4g.18935.2; ocean_session=1628611121751.14bch8tm; notice_behavior=implied,us; zadane_sid=6b6448458b5666e00d603f8bb7382dd6; __utmc=153832555; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; __aaxsc=2; _pubcid=4f63351e-1e6b-4568-a4ab-27057540aae2; panoramaId_expiry=1629316186620; panoramaId=0d07a4d5c3a1e32adc81a2b7929e16d53938a6caa919b0260705a82a2a85457d; pbjs-unifiedid=%7B%22TDID%22%3A%226acb4038-a209-45f3-9bc6-1914b7300dbf%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-07-11T19%3A49%3A46%22%7D; _dlt=1; Student_unpaid=True; Student=True; _hjAbsoluteSessionInProgress=0; _hjIncludedInSessionSample=1; __utma=153832555.211202751.1620608511.1628807074.1628809100.160; aasd=2%7C1628809105534; cto_bidid=BQ8xMl9DcDNFUFV3WG43RXU4bGdBOXVRaWtlVUhPR1N2dkVMU0VTbVUlMkJQV2dXWkJZb1U1WlBkRDhSSGxCbzNWSkdxZUxFSWtDOGVCZkhIczBnOFdzSTRUZGUwWU4lMkYlMkZEYkdwcnRqOEdScnU3d2p0Qk1vRXhhZmt0JTJCQkxtSmxXWTBQWDh5VmNuU2J1aE5HbkdtVjElMkJReUMlMkZqeEElM0QlM0Q; cto_bundle=EwWRSF9sMkR4ellHYzdvUGpTSjBlWGJIZUdKNktMaDFVRnpaN2RsJTJCbTZxJTJCWlBidDB2cWtmU2NFVFZVWDVrbE9MNGdETVZEc3RHdHlTJTJCJTJGU2tkTEhtRzhEM2ZGRzFmUEZzbzdrTDQ0R0RONEltbk56N3MyRzNwYiUyRkJEbGpNR1c5YTg4Mmxnak55YTdGRzJ4aDhSZGVlUHd3RE1EYzZFYWYwMXFGZTlHZlRLQzl5cjJLM2pMTW1EeENvdkpJNWp0ZVlycUZG; _lr_geo_location=US; user_token=RGVwMzBodWFwcFJFbFhSc2l1d0ZEajB2OC93bjZac0RwOHFMSXlmZlJZZz0tLUw3RmFWc1pRNkN3VHF2YlF0UWk2MVE9PQ%3D%3D--d77f7d2fdaca0a9c4b35f1be813acd0845b513dc; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly." + mark + "=eyJkZXZpY2VJZCI6IjAxZDU2NjVmLWFkYzgtNDRhNi1iMWQ1LTI0NDZjYzRkNjc3M1IiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYyODgwOTM5NDgxOCwibGFzdEV2ZW50VGltZSI6MTYyODgxMDA4OTAzMywiZXZlbnRJZCI6MzEsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjozMX0=; notice_preferences=0:; notice_gdpr_prefs=0:; cmapi_gtm_bl=ga-ms-ua-ta-asp-bzi-sp-awct-cts-csm-img-flc-fls-mpm-mpr-m6d-tc-tdc; cmapi_cookie_privacy=permit 1 required; Zadanepl_cookie[isLoggedIn]=1; _dc_gtm_UA-43896087-1=1; datadome=F0PRolvuIrsKZ-eYP57.5EYm6iNAbW8osbkj73rJNcUgaiLrrkb.UBA7JziMMAzvvcOhSQNBbm.FPR6tuDv-FWNSwPi~PHx._3n3j-zFcE");
            xhr.send(data);
        } else {
            //pass
        }




    }

}


function remove(mynum) {

        let selecteddel = document.getElementById("delr" + mynum)

        if (selecteddel.value !== "0") {
            remove_dictionary = {
                "1": "'Too Many Questions'",
                "2": "'Link in Question'",
                "3": "'Essay or Project'",
                "4": "'Too Trivial'",
                "5": "'Brainly-Related Question'",
                "6": "'Wrong Subject'",
                "8": "'Default'",
                "9": "'Not English'",
                "10": "'Multiple Posting'",
                "12": "'Personal Information'",
                "13": "'Self Harm'",
                "14": "'Unclear Question'",
                "15": "'Unclear Attatchment'",
                "16": "'Too General'",
                "17": "'Incomplete Question'",
                "18": "'Not A School Problem"
            };
            let rsn_no = String(selecteddel.value);
            let txtdel = remove_dictionary[rsn_no];

            if (rsn_no === "1") {
                id = 11;
                text = "Whoa there! Turns out there can be too much of a good thing. Your questions are great, but there are just too many rolled into one. Please post your questions individually to make sure other users can get the opportunity to help you. Thanks! For more information on what makes a great question, check out our Content Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139"
            }
            if (rsn_no === "2") {
                id = 15;
                text = "Your question has been removed because it contained a link to a website other than Brainly. Please keep in mind that links to outside sites or sources are not allowed. Thanks for keeping Brainly safe! For more information on what makes a great question, check out our Content Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139"
            }
            if (rsn_no === "3") {
                id = 17;
                text = "Your question has been removed because it was too complex. You'll need to complete this project on your own rather than asking other Brainly users to do it for you. If you have any specific questions about the assignment that could help you get started, feel free to post those instead!"
            }
            if (rsn_no === "4") {
                id = 30;
                text = "Your question has been removed because it seems a bit too simple for other Brainly users to help with. This question can be solved with common knowledge or some help from a calculator. Other users won't be able to help you understand the problem by solving it for you. Please help keep the quality of Brainly high by posting some more challenging questions. Thanks!"
            }
            if (rsn_no === "5") {
                id = 67;
                text = "It looks like you've asked a question about how to use Brainly! Since Brainly is only intended for help with school-related questions, we had to remove this one. Instead, check out our help site to see if your question has been answered here: faq.brainly.com. If you still need help, send us a message at https:\/\/brainly.com\/contact\/index and we'll get back to you soon!"
            }
            if (rsn_no === "6") {
                id = 75;
                text = "Whoops! It looks like you've posted your question under the wrong subject. If your question is in the wrong category, it may not be seen by a user who could help! Please repost your question under the correct subject so you can get the answer you need. If you can't find the specific class that you need help in, pick the subject that is most closely related. Thanks!"
            }
            if (rsn_no === "8") {
                id = 6;
                text = "Your question violates our Community Guidelines, so we had to take it down. Please review the guidelines here: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139. Thanks for being a team player!"
            }
            if (rsn_no === "9") {
                id = 9;
                text = "Hi! Hola! Salut! Hallo! It looks like you've posted a question in a language other than English. Please be sure to select \"World Languages\" when asking your question. Otherwise, if you live outside the United States or want to use Brainly in a different language, check out the other language versions of Brainly here: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/115001185650-How-do-I-use-Brainly-in-a-different-language-"
            }
            if (rsn_no === "10") {
                id = 24;
                text = "Whoops! It looks like this question has already been asked on Brainly. To ensure all questions get answered in a timely matter, we had to remove this duplicate question. Make sure to use the search bar to see if your question has already been answered before posting a new one. Thanks!"
            }
            if (rsn_no === "12") {
                id = 56;
                text = "Your question has been removed because it\u2019s not safe to share or ask for personal information online. Keep information like your real name, school name, address, and social media usernames to yourself!"
            }
            if (rsn_no === "13") {
                id = 72;
                text = "We had to remove your question because it was not school-related. More importantly, we're concerned about the content you are posting about wanting to hurt yourself, and we want to encourage you to seek help.\r\n\r\nWe recommend that you talk to a parent or other adult you trust about how you're feeling. If you'd prefer to get help from someone else, you can use the following resources to be connected with a trained staff member from a prevention service provider in your area:\r\n\r\nNational Phone Hotline: 1-800-273-TALK\r\nCrisis Text Line: http:\/\/www.crisistextline.org\/\r\nSafety on Brainly: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360013472580-Safety-on-Brainly-"
            }
            if (rsn_no === "14") {
                id = 18;
                text = "Uh oh! It looks like your question is unclear or a bit confusing. Please double-check your assignment and make sure you have all the parts of the question and any details needed to solve it. For more information on what makes a great question, check out our Question Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360011452800-Question-Guidelines."
            }
            if (rsn_no === "15") {
                id = 80;
                text = "We love a good puzzle, but your attachment is unreadable! Please retake the photo and repost your question. Make sure the photo is clear and no parts of the question are cut off. For more information on what you can attach to your questions, check out this link: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014748820"
            }
            if (rsn_no === "16") {
                id = 81;
                text = "Uh oh! It looks like your question is a bit too vague for other students to answer. Brainly is designed to give answers to specific homework questions. Rather than asking about a general topic, try to narrow your question down to one academic problem. Thanks!"
            }
            if (rsn_no === "17") {
                id = 82;
                text = "Uh oh! It looks like your question is missing some crucial information. Please repost it with any helpful information such as diagrams, excerpts, or answer choices needed to solve it. For more information on what makes a great question, check out our Question Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360011452800-Question-Guidelines."
            }
            if (rsn_no === "18") {
                id = 78;
                text = "Whoops! It looks like your question was not part of an academic assignment. Since Brainly is only intended for homework questions, we had to remove it. Please keep the question feed clear of personal questions so other users can get the help they need. Thanks!"
            }
            let delrep = String(document.getElementById("delete" + mynum).parentElement.children[1].children[0].href)
            let x1 = delrep.replace("https://brainly.com/question/", "")
            let x2 = x1.substring(0, 8)
            let numdel = parseInt(x2, 10);
            let confdel = confirm("Are you sure you'd like to delete this question with reason " + txtdel + "?")
            var data = JSON.stringify({
                "model_id": numdel,
                "model_type_id": 1,
                "reason_id": id,
                "reason": text,
                "give_warning": false,
                "take_points": false,
                "return_points": true,
                "schema": ""
            });

            function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

            let token = getCookie("Zadanepl_cookie[Token][Long]")
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    let resp = JSON.parse(this.responseText);
                    if (resp["success"] === true) {
                        let list = document.querySelector("#tasks-solved > ol")
                        let question = list.children[mynum - 1]
                        question.style.backgroundColor = "#FFC7BF"
                    }
                }
            });
            if (confdel === true) {
                xhr.open("POST", "https://brainly.com/api/28/moderation_new/delete_task_content");
                xhr.setRequestHeader("authority", "brainly.com");
                xhr.setRequestHeader("x-b-token-long", String(token));
                xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
                xhr.setRequestHeader("content-type", "application/json");
                xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                xhr.setRequestHeader("sec-ch-ua-mobile", "?0");

                xhr.setRequestHeader("origin", "https://brainly.com");
                xhr.setRequestHeader("sec-fetch-site", "same-origin");
                xhr.setRequestHeader("sec-fetch-mode", "cors");
                xhr.setRequestHeader("sec-fetch-dest", "empty");
                xhr.setRequestHeader("referer", "https://brainly.com/question/" + numdel + "");
                xhr.setRequestHeader("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
                xhr.send(data);
            } else {
                //pass
            }



        }



document.querySelector("#appended")
    }


    async function f() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(warnings()), 500)

        });

        let result = await promise; // wait until the promise resolves (*)

    }

    f();

function warnings(){
    if (window.location.href.includes("user_content") === false){
        let friend = document.querySelector("#main-left > div.personal_info > div.header > div.info > div.info_bottom > div.pw > div.friends > a")
        let fullurl = friend.href 
        let usersid = fullurl.split("/")[5]
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            
            document.getElementById("footer").outerHTML = this.responseText
        }
        });
        
        xhr.open("GET", "https://brainly.com/users/view_user_warns/"+usersid);
        xhr.setRequestHeader("authority", "brainly.com");
        xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"");
        xhr.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
        xhr.setRequestHeader("cache-control", "max-age=0");
        xhr.setRequestHeader("upgrade-insecure-requests", "1");
        xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
        xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
        xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36");
        xhr.setRequestHeader("sec-fetch-site", "same-origin");
        xhr.setRequestHeader("sec-fetch-mode", "cors");
        xhr.setRequestHeader("sec-fetch-dest", "empty");
        xhr.setRequestHeader("referer", fullurl);
        xhr.setRequestHeader("cookie", "_dlt=1; _dlt=1; _gcl_au=1.1.457574581.1629564373; _ga=GA1.2.1513956525.1629564373; notice_behavior=implied,us; _dlt=1; _fbp=fb.1.1629564373505.1998992217; _hjid=1b581735-7fba-4927-ab75-8f52ccbf31ef; Zadanepl_cookie[Token][Guest]=I3jtbbrGxVL0SPFHvqBqxOB3bPr6UOT7rNvQCjV6pki8AYjNLFOTanqAoBIx2zh5oE1gsScqTxDnjOtk; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; _pubcid=c44c475d-5a0c-47ee-a432-d1fcec050015; __gads=ID=43f6bb06d45182e0:T=1629565095:S=ALNI_MZZHicHRY2zqn5wCpVUBT3NyhGNOA; zadane_sid=1835df81de64477c28e2ef0703323663; __utmc=153832555; __utmz=153832555.1629565100.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); notice_preferences=7:; notice_gdpr_prefs=0,1,2,3,4,5,6,7:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit 1,2,3,4,5,6,7,8; _cc_id=e78ffe171e7dbdbb062659e75c4eca35; panoramaId=62e78db9004cfa649d8ef7caea9416d5393822d64845cc14222790bab385512c; mp_f152bf766eec4e74f98b0e4d38183926_mixpanel=%7B%22distinct_id%22%3A%20%2217b6f209269ae5-0977486624c68a-35667c03-384000-17b6f20926ae83%22%2C%22%24device_id%22%3A%20%2217b6f209269ae5-0977486624c68a-35667c03-384000-17b6f20926ae83%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; _gid=GA1.2.1381067085.1630125470; viewer_uid=VlFzbXJXN2thU2VZai9LRGxudlYwQ29neUJwc014MnNqYzR5d3NLb2dGND0tLWlDSDZ1Z1cvN2c5T3I3OUhvcmo2WXc9PQ%3D%3D--e79c18e037a487ad4c50ffc0e6b05bcc8fa0be49; panoramaId_expiry=1630814368284; user_token=U3N2MGM0VExtckZya0YyTXp5Y0dXS0JKQ3ZCVHREeVEzOFdYSWZVUnp5TT0tLWE1V0dUejZ5dzlxOTREZWpuS3RIZUE9PQ%3D%3D--a790a4b00ae21a1b89011cf01f33d838aa50c27d; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly.com=eyJkZXZpY2VJZCI6IjE5MmM1NzBlLWFjODgtNGJiZS1hZTkyLWIxN2M3NGIyMzUzMVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzMDI1NDgwNjI2MSwibGFzdEV2ZW50VGltZSI6MTYzMDI1NDkzMTcwNiwiZXZlbnRJZCI6NTQsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjo1NH0=; _hjAbsoluteSessionInProgress=0; ocean_session=1630260204271.phr2xxkc; _hjIncludedInSessionSample=1; first_visit=1630260217; myHash=0b837478babaf18b9f6b32d84455bce5; Zadanepl_cookie[Token][Long]=r_rTz0L2Wpsdtyasb-lGkvvt82Jl-06WJ_BW8n1N-Rs%3D; Student_unpaid=True; Student=True; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; cnx_userId=fa6b93f2ac1f41238c5c5cf726518e96; _pbjs_userid_consent_data=3524755945110770; _lr_env_src_ats=false; _lr_geo_location=US; pbjs-unifiedid=%7B%22TDID%22%3A%224e63b9da-9752-4cd7-8414-01cd95c32d32%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-07-29T18%3A13%3A56%22%7D; _gaexp=GAX1.2.sx1URVOyRTaGOZxjVmhDPw.18878.0; Zadanepl_cookie[isLoggedIn]=1; __utma=153832555.1513956525.1629564373.1630259334.1630262776.19; __utmb=153832555.0.10.1630262776; cto_bidid=-iykzF9NV3pkZDhMVEpPWCUyRlBIJTJCdkltb0pWUXVsY1N3c0wycFlqelUlMkZjQzZOM01CJTJCTFFsdWtvUVZoakdFSSUyRmpiZUtwbVNYaXJUN2hSOEpWVWI0OW8lMkYzUyUyQmxIWTlHNkZRSmMlMkJrc1dFa0c0T1VMR0UlM0Q; cto_bundle=GyLhvl9jSzBwVWNrYmhnOGowSHhHcDdFOHV1UjZJS2F2WFhPUDZSTHg1N0J6a25Wcm9mUDF5aFJZMzVHMWFjMUwyWXZYVU52cGlhU0VFMTJGZFJNMklRUkF2UDZPR05oRiUyRkF2cjlpN1o5TXI1V1JJU1FDNFd1NjJKeGZ3RjYlMkZXTDYyOXlsV0tSeHR0NUs2JTJGdUV0RDhXRXUybXclM0QlM0Q; _dc_gtm_UA-43896087-1=1; _gali=html; datadome=Azo3xx2hMDd_E4sVDWJvv-cL0Z1B1qSSm_-zDTzT0PPKYdP_I~wejS0V7mt_9RMnkGag4a7ocQqz1mCQaTsc6waW6Oa~la.aL9iRhRvZk7");
        
        xhr.send();
    }
    
}
