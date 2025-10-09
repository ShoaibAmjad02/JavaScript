function add(num){
var input = document.getElementById("output");
input.value += num;

}


function equals(){
    var input = document.getElementById("output");
    input.value = eval(input.value);
}

function Del(){
    var input = document.getElementById("output");
    input.value = input.value.slice(0, -1);
}
function AC(){
    var input = document.getElementById("output");
    input.value = "";
}

function exponent(){
    var input = document.getElementById("output");
    input.value += "**";
}

function log(){
    var input = document.getElementById("output");
    input.value += "Math.log10(";
}

function shift(){
    var shiftButton = document.querySelector("button[onclick='shift()']");
    var buttons = document.querySelectorAll("#without-shift");
    if(shiftButton.classList.contains("active")){
        shiftButton.classList.remove("active");
        buttons.forEach(button => {
            button.disabled = false;
        });
    }
    else{
        shiftButton.classList.add("active");
        buttons.forEach(button => {
            if(button !== shiftButton){
                button.disabled = true;
            }
        });
    }
}

function antilog(){
    var input = document.getElementById("output");
    input.value += "Math.pow(10,";
}