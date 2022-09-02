const btn = Array.from(document.querySelectorAll("button"));
btn.forEach(btn => btn.addEventListener('click', buttonaction));
const displayedcontent = document.querySelector('.screen')
const displayedTopcontent = document.querySelector('.topscreen')
let numberone = "";
let operande = "";
let numbertwo = "";
let currentnumber = " ";

function buttonaction(e){
    const buttonselected = e.target.id;
    switch(buttonselected){
        case "one":
            currentnumber += "1";
            displaycontent(currentnumber);
            break;
        case "two":
            currentnumber += "2";
            displaycontent(currentnumber);
            break;
        case "three":
            currentnumber += "3";
            displaycontent(currentnumber);
            break;
        case "four":
            currentnumber += "4";
            displaycontent(currentnumber);
            break;
        case "five":
            currentnumber += "5";
            displaycontent(currentnumber);
            break;
        case "six":
            currentnumber += "6";
            displaycontent(currentnumber);
            break;
        case "seven":
            currentnumber += "7";
            displaycontent(currentnumber);
            break;
        case "eight":
            currentnumber += "8";
            displaycontent(currentnumber);
            break;
        case "nine":
            currentnumber += "9";
            displaycontent(currentnumber);
            break;
        case "zero":
            currentnumber += "0";
            displaycontent(currentnumber);
            break;
        case "sign":
            currentnumber[0] === " "? currentnumber = currentnumber.replace(" ","-"):currentnumber =currentnumber.replace("-"," ");           
            displaycontent(currentnumber);                     
            break;
        case "errase":
            if (currentnumber.length >1) {currentnumber = currentnumber.slice(0, -1)} ;
            displaycontent(currentnumber);  
            break;
        case "clear":
            numberone = "";
            operande = "";
            numbertwo = "";
            currentnumber = " ";
            displayTopcontent(numberone);
            displaycontent(currentnumber);
            break;
        case "plus":
            if (currentnumber.length >1 && operande === ""){
                numberone= currentnumber;
                operande= "+";
                currentnumber = " ";
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            else if(numberone.length>1 && operande !== "" && currentnumber.length >1){
                if(operande=== "/" && (currentnumber===" 0" ||currentnumber==="-0")){
                    currentnumber=" ";
                    break;
                }
                let result = evaluate(numberone, operande, currentnumber);
                numberone = result;
                operande ="+";
                currentnumber=" ";
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            break;
        case "minus":
            if (currentnumber.length >1 && operande === ""){
                numberone= currentnumber;
                operande= "-";
                currentnumber = " ";
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            else if(numberone.length>1 && operande !== "" && currentnumber.length >1){
                if(operande=== "/" && (currentnumber===" 0" ||currentnumber==="-0")){
                    currentnumber=" ";
                    break;
                }
                let result = evaluate(numberone, operande, currentnumber);
                numberone = result;
                operande ="-";
                currentnumber=" ";
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            break;
        case "multiply":
            if (currentnumber.length >1 && operande === "") {
                numberone= currentnumber;
                operande= "*";
                currentnumber = " ";
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            else if(numberone.length>1 && operande !== "" && currentnumber.length >1){
                if(operande=== "/" && (currentnumber===" 0" ||currentnumber==="-0")){
                    currentnumber=" ";
                    break;
                }
                let result = evaluate(numberone, operande, currentnumber);
                numberone = result;
                operande ="*";
                currentnumber=" ";
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            break;
        case "divide":
            if (currentnumber.length >1 && operande === ""){
                numberone= currentnumber;
                operande= "/";
                currentnumber = " ";
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            else if(numberone.length>1 && operande !== "" && currentnumber.length >1){
                if(operande=== "/" && (currentnumber===" 0" ||currentnumber==="-0")){
                    currentnumber=" ";
                    break;
                }
                let result = evaluate(numberone, operande, currentnumber);
                numberone = result;
                operande ="/";
                currentnumber=" ";
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            break;
        case "comma":
            if(currentnumber.indexOf(".")=== -1){currentnumber +="."}
            displaycontent(currentnumber);
            break;
        case "equal":
            if(numberone.length>1 && operande !== "" && currentnumber.length >1){
                if(operande=== "/" && (currentnumber===" 0" ||currentnumber==="-0")){
                    currentnumber=" ";
                    break;
                }
                let result = evaluate(numberone, operande, currentnumber);
                numberone = currentnumber;
                operande ="";
                currentnumber=result;
                displayTopcontent(numberone);
                displaycontent(currentnumber);
            }
            break;
    }   
}

function displaycontent(content){
    if (content.length>16){
        let contnum = parseFloat(content)/ 10**(content.length-1);
        let contstr = contnum.slice(0,12);
        content = contstr +"E+" ;
    }
    displayedcontent.textContent = content; 
}
function displayTopcontent(content){
    if (content.length>16){
        content = content.slice(0,16);
    }
    displayedTopcontent.textContent = content; 
}



function evaluate(x,y,z){
    let p = parseFloat(x);
    let q = parseFloat(z);
    let result = 0;
    switch(y){
        case "+":
            result = p+q;
            break;           
        case "-":
            result = p-q;
            break;
        case "*":
            result = p*q;
            break;
        case "/":
            
            q!==0 ? result = p/q: result="err div 0";
            break;      
    }
    if (result >= 0) {
        result=" "+result;
    }
    return ""+result; // turn result into a string

}
