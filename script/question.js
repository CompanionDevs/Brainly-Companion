
function appendcalculator(){
    
    let html="";
    html += "";
    html += "	";
    html += "	<!-- CSS property to create interactive";
    html += "		calculator interface -->";
    html += "	<style>";
    html += "	";
    html += "		\/* Style to set the title of calculator *\/";
    html += "		.title {";
    html += "			margin-bottom: 10px;";
    html += "			padding: 5px 0;";
    html += "			font-size: 20px;";
    html += "			font-weight:bold;";
    html += "			text-align:center;";
    html += "			width: 447px;";
    html += "			color:green;";
    html += "			border: solid black 2px;";
    html += "		}";
    html += "		";
    html += "		\/* Set the button style *\/";
    html += "		#btn {";
    html += "			width: 100%;";
    html += "			height: 40px;";
    html += "			font-size: 30px;";
    html += "		}";
    html += "		";
    html += "		input[type=\"button\"] {";
    html += "			background-color:green;";
    html += "			color: black;";
    html += "			border: solid black 2px;";
    html += "			width:100%";
    html += "		}";
    html += "		";
    html += "		\/* Set input textarea *\/";
    html += "		input[type=\"text\"] {";
    html += "			background-color:white;";
    html += "			border: solid black 2px;";
    html += "			width:100%";
    html += "		}";
    html += "	<\/style>";
    html += "	";
    html += "	<script>";
    html += "		";
    html += "		\/* Creating function in HTML for backspace operation *\/";
    html += "		function backspace(calc) {											";
    html += "			size = calc.display.value.length;";
    html += "			calc.display.value = calc.display.value.substring(0, size-1);";
    html += "		}";
    html += "		";
    html += "		\/* Creating function to calculate factorial of element *\/";
    html += "		function calculate(calc) {";
    html += "			";
    html += "			\/* Check if function include ! character then";
    html += "			calculate factorial of number *\/";
    html += "			if(calc.display.value.includes(\"!\")) {";
    html += "				";
    html += "				size = calc.display.value.length;";
    html += "				n = Number(calc.display.value.substring(0, size-1));";
    html += "				f = 1;";
    html += "				";
    html += "				for(i = 2; i <= n; i++)";
    html += "					f = f*i;";
    html += "				calc.display.value = f;";
    html += "			}";
    html += "			";
    html += "			\/* If function include % character then calculate";
    html += "			the % of number *\/";
    html += "			else if(calc.display.value.includes(\"%\")) {";
    html += "				";
    html += "				size = calc.display.value.length;";
    html += "				n = Number(calc.display.value.substring(0, size-1));";
    html += "				calc.display.value = n\/100;";
    html += "			}";
    html += "";
    html += "			else";
    html += "				\/* Otherwise evaluate and execute output *\/";
    html += "				calc.display.value = eval(calc.display.value);";
    html += "		}";
    html += "	<\/script>";
    html += "<\/head>";
    html += "";
    html += "<body>";
    html += "	<div class = title >";
    html += "		GeeksforGeeks Scientific Calculator";
    html += "	<\/div>";
    html += "	";
    html += "	<form name = \"calc\">";
    html += "		";
    html += "	<table id = \"calc\" border = 2>";
    html += "		";
    html += "	<tr>";
    html += "		<td colspan=5><input id=\"btn\" name=\"display\"";
    html += "			onkeypress=\"return event.charCode >= 48";
    html += "			&& event.charCode <= 57\" type=\"text\">";
    html += "		<\/td>";
    html += "	<\/tr>";
    html += "	";
    html += "	<tr>";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"1\"";
    html += "				OnClick=\"calc.display.value+='1'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"2\"";
    html += "				OnClick=\"calc.display.value+='2'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"3\"";
    html += "				OnClick=\"calc.display.value+='3'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"C\"";
    html += "				OnClick=\"calc.display.value=''\">";
    html += "		<\/td>";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"<-\"";
    html += "				OnClick=\"let calc = this.form; size = calc.display.value.length;calc.display.value = calc.display.value.substring(0, size-1);\">";
    html += "		<\/td>";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"=\"";
    html += "				OnClick=\"let calc = this.form; if(calc.display.value.includes('!')) {size = calc.display.value.length;n = Number(calc.display.value.substring(0, size-1));f = 1;for(i = 2; i <= n; i++)f = f*i;calc.display.value = f;}else if(calc.display.value.includes('%')) {size = calc.display.value.length;n = Number(calc.display.value.substring(0, size-1));calc.display.value = n/100;}else {calc.display.value = eval(calc.display.value);}\">";
    html += "		<\/td>";
    html += "	<\/tr>";
    html += "	";
    html += "	<tr>";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"4\"";
    html += "				OnClick=\"calc.display.value+='4'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"5\"";
    html += "				OnClick=\"calc.display.value+='5'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"6\"";
    html += "				OnClick=\"calc.display.value+='6'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"-\"";
    html += "				OnClick=\"calc.display.value='-'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"%\"";
    html += "				OnClick=\"calc.display.value+='%'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"cos\"";
    html += "				OnClick=\"calc.display.value='Math.cos('\">";
    html += "		<\/td>";
    html += "	<\/tr>";
    html += "	";
    html += "	<tr>";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"7\"";
    html += "				OnClick=\"calc.display.value+='7'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"8\"";
    html += "				OnClick=\"calc.display.value+='8'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"9\"";
    html += "				OnClick=\"calc.display.value+='9'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"*\"";
    html += "				OnClick=\"calc.display.value+='*'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"n!\"";
    html += "				OnClick=\"calc.display.value+='!'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"sin\"";
    html += "				OnClick=\"calc.display.value='Math.sin('\">";
    html += "		<\/td>";
    html += "	<\/tr>";
    html += "	";
    html += "	<tr>";
    html += "		<td><input id=\"btn\" type=\"button\" value=\".\"";
    html += "				OnClick=\"calc.display.value+='.'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"0\"";
    html += "				OnClick=\"calc.display.value+='0'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\",\"";
    html += "				OnClick=\"calc.display.value+=','\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"+\"";
    html += "				OnClick=\"calc.display.value+='+'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"\/\"";
    html += "				OnClick=\"calc.display.value+='\/'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"tan\"";
    html += "				OnClick=\"calc.display.value='Math.tan('\">";
    html += "		<\/td>";
    html += "	<\/tr>";
    html += "	";
    html += "	<tr>";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"E\"";
    html += "				OnClick=\"calc.display.value+='Math.E'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"pi\"";
    html += "				OnClick=\"calc.display.value+='Math.PI'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"^\"";
    html += "				OnClick=\"calc.display.value+='Math.pow('\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"(\"";
    html += "				OnClick=\"calc.display.value+='('\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\")\"";
    html += "				OnClick=\"calc.display.value+=')'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"log\"";
    html += "				OnClick=\"calc.display.value='Math.log('\">";
    html += "		<\/td>";
    html += "	<\/tr>";
    html += "	";
    html += "	<tr>";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"sqrt\"";
    html += "				OnClick=\"calc.display.value+='Math.sqrt('\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"ln2\"";
    html += "				OnClick=\"calc.display.value+='Math.LN2'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"ln10\"";
    html += "				OnClick=\"calc.display.value+='Math.Log10'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"l2e\"";
    html += "				OnClick=\"calc.display.value+='Math.LOG2E'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"l10e\"";
    html += "				OnClick=\"calc.display.value+='Math.log10'\">";
    html += "		<\/td>";
    html += "		";
    html += "		<td><input id=\"btn\" type=\"button\" value=\"exp\"";
    html += "				OnClick=\"calc.display.value='Math.exp('\">";
    html += "		<\/td>";
    html += "	<\/tr>";
    html += "	<\/table>";
    html += "	<\/form>";
    html += "<\/body>";
    html += "						";
    html += "";

    let co = document.createElement("li")
    if (document.getElementsByClassName("sg-flex sg-flex--full-height sg-flex--column")[0].id !== "apd"){
        
        document.getElementsByClassName("sg-flex sg-flex--full-height sg-flex--column")[0].appendChild(co)
        document.getElementsByClassName("sg-flex sg-flex--full-height sg-flex--column")[0].id = "apd"
        co.outerHTML = html
    } else {
        //pass
    }
    
    
    
            
            /* Creating function to calculate factorial of element */
            function calculate(calc) {
                
                /* Check if function include ! character then
                calculate factorial of number */
                if(calc.display.value.includes("!")) {size = calc.display.value.length;n = Number(calc.display.value.substring(0, size-1));f = 1;for(i = 2; i <= n; i++)f = f*i;calc.display.value = f;}else if(calc.display.value.includes("%")) {size = calc.display.value.length;n = Number(calc.display.value.substring(0, size-1));calc.display.value = n/100;}else   calc.display.value = eval(calc.display.value);}
}


function run(){
    
    if (document.getElementsByClassName("brn-tools")[0] !== undefined){
        async function f() {
    
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(appendcalculator()), 2000)
        
            });
            
            let toolsbox = document.getElementsByClassName("brn-tools__buttons")[0]
            let button = document.createElement("button")
            button.innerHTML = "Open Calculator"
            button.addEventListener("click",function(){
                if (document.getElementById("calc").style.display === "none"){
                    document.getElementById("calc").style.display = "block"
                } else {
                    document.getElementById("calc").style.display = "none"
                }
            })
            toolsbox.appendChild(button)
            let result = await promise; // wait until the promise resolves (*)
        
        }
        
        f();
    }
}
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(run()), 5000)

    });
    
   
    let result = await promise; // wait until the promise resolves (*)

}

f();

var intervalId = window.setInterval(function() {
    appendcalculator()
}, 100);
