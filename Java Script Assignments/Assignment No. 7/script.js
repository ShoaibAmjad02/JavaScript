var table = parseInt(prompt("Enter the number for which you want the multiplication table:"));
var count = parseInt(prompt("Enter how far you want the table to go:"));

for (var i = 1; i < count + 1; i += 1) {
     document.getElementById("output").innerHTML += table + ` x ` + i + ` = ` + table * i + `<br>`;
}