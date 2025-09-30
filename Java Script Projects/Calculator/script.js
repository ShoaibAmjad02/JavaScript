function add(num){
var input = document.getElementById("output");
input.value += num;

    console.log(num)
}


function equals(){
    var input = document.getElementById("output");
    input.value = eval(input.value);
}