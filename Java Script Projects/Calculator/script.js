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