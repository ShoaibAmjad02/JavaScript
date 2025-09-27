function changeColorname() {
    var Input = document.getElementById("input").value;
    console.log(Input);
    document.getElementById("box").style.background = Input;
}
function changeColorcode() {
    var input2 = "#";
    var inputCode = document.getElementById("inputcode").value;
    inputCode = input2 + inputCode;
    console.log(inputCode);
    document.getElementById("box").style.background = inputCode;
}

function resetColor() {
    document.getElementById("box").style.background = "#ffffff";
}
function clearOtherInput(idToClear) {
    document.getElementById(idToClear).value = '';
}