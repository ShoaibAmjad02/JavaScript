
let text = prompt("Enter your name:");
document.getElementById("output").textContent = "No input provided.";
      

let upper = text.toUpperCase();
let lower = text.toLowerCase();

let toggle = "";
for (let i = 0; i < text.length; i++) {
     let ch = text[i];
      if (ch === ch.toUpperCase()) {
        toggle += ch.toLowerCase();
    } else {
        toggle += ch.toUpperCase();
        }
      }

let words = text.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
}
let title = words.join(" ");

let upperCount = 0;
let lowerCount = 0;
for (let char of text) {
if (char >= 'A' && char <= 'Z') upperCount++;
    else if (char >= 'a' && char <= 'z') lowerCount++;
}

document.getElementById("output").textContent =
    "Original:      " + text + "\n" +
    "Uppercase:     " + upper + "\n" +
    "Lowercase:     " + lower + "\n" +
    "Toggle Case:   " + toggle + "\n" +
    "Title Case:    " + title + "\n" +
    "Upper Count:   " + upperCount + "\n" +
    "Lower Count:   " + lowerCount;