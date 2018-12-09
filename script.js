var points = 0;
let corrects = ["\"  8  1  2  4 \"", "\"  7  5  5  9 \"", "\"  1  0  5  7 \""];

setEventListeners();
document.getElementById("go").style.backgroundColor = "lightgray";
document.getElementById("del").style.backgroundColor = "lightgray";

function add(event){
    let num = event.target.innerHTML;
    let pCode = document.getElementById("pCode");
    let nums = document.getElementsByClassName("number");
    if(pCode.innerHTML.length < 14) {
        let numberWithoutQuotes = (pCode.innerHTML).substring(0, pCode.innerHTML.length - 1);
      pCode.innerHTML = numberWithoutQuotes + " " + num + " \"";
    }
    if(pCode.innerHTML.length > 13){
        for(var i = 0; i < nums.length; i++){
            nums.item(i).style.backgroundColor = "lightgray";
            nums.item(i).onclick = null;
        }
    }
    if(pCode.innerHTML.length > 4){
        document.getElementById("del").style.backgroundColor = "deepskyblue";
        document.getElementById("del").onclick = remove;
    }else{
        document.getElementById("del").style.backgroundColor = "lightgray";
        document.getElementById("del").onclick = null;
    }
    if(pCode.innerHTML.length < 14){
        document.getElementById("go").style.backgroundColor = "lightgray";
        document.getElementById("go").onclick = null;
    }else{
        document.getElementById("go").style.backgroundColor = "deepskyblue";
        document.getElementById("go").onclick = verify;
    }
}

function remove(){
    let pCode = document.getElementById("pCode");
    if(pCode.innerHTML.length > 4){
        let numberWithoutQuotes = (pCode.innerHTML).substring(0, pCode.innerHTML.length - 5);
        if(numberWithoutQuotes.trim().valueOf() == ""){
            numberWithoutQuotes = "\"";
        }
      pCode.innerHTML = numberWithoutQuotes +  " \"";
      setEventListeners();
    }
    if(pCode.innerHTML.length > 4){
        document.getElementById("del").style.backgroundColor = "deepskyblue";
        document.getElementById("del").onclick = remove;
    }else{
        document.getElementById("del").style.backgroundColor = "lightgray";
        document.getElementById("del").onclick = null;
    }
    if(pCode.innerHTML.length < 14){
        document.getElementById("go").style.backgroundColor = "lightgray";
        document.getElementById("go").onclick = null;
    }else{
        document.getElementById("go").style.backgroundColor = "deepskyblue";
        document.getElementById("go").onclick = verify;
    }
}

function setEventListeners(){
    let nums = document.getElementsByClassName("number");
    for(var i = 0; i < nums.length; i++){
        nums.item(i).style.backgroundColor = "deepskyblue";
        nums.item(i).onclick = add;
    }
}

function verify(){
    var tries = 0;
    for(var i = 0; i < corrects.length; i++){
        if(document.getElementById("pCode").innerHTML.trim().valueOf() == corrects[i]){
            points++;
            yay(1);
            var index = corrects.indexOf(document.getElementById("pCode").innerHTML.trim().valueOf());
            if(index > -1){
                corrects.splice(index, 1);
            }
            if(points >= 3){
                setTimeout(() => {document.getElementsByTagName("body").item(0).innerHTML = null;
                
                var DOM_img = document.createElement("img");
                DOM_img.src = "./img/wink.svg";
                DOM_img.style.width = 100;

                document.getElementsByTagName("body").item(0).appendChild(DOM_img);
                yay(0)}, 1000);
            }
        } else {
            tries++;
        }
    }
    if(tries == i){
        yay(-1);
    }
}

function yay(deg){
    switch(deg){
        case -1: 
            document.body.style.backgroundColor = "red";
            setTimeout(() => {document.body.style.backgroundColor = "#ffeb3b"}, 1000);
            break;
        case 0:
            document.body.style.backgroundColor = "#4285f4";
            break;
        case 1:
            document.body.style.backgroundColor = "yellowgreen";
            setTimeout(() => {document.body.style.backgroundColor = "#ffeb3b"}, 1000);
            break;
    }
}