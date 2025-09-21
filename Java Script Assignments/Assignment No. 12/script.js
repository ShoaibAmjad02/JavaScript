function sum() {
  var a = 2 + 3
   alert("The sum of 2 and 3 = " + a)
}
function multiplication() {
  var a = 2 * 3
   alert("The multiplication of 2 and 3 = " + a)
}
function division() {
  var a = 2 / 3
   alert("The division of 2 and 3 = " + a)
}
function substraction() {
  var a = 2 - 3
   alert("The substraction of 2 and 3 = " + a)
}
function countCharacters() {
  const input = document.getElementById("textInput");
  document.getElementById("charCount").innerText = "Characters: " + (input.value.length + 1);
}