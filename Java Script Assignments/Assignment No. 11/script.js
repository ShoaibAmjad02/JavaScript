var sentence = prompt("Enter the sentence to filter longest word :")

function findLongestWord() {
  var words = sentence.split(' ')
  var longestWord = [];
  var maxLength = 0;

  for(var i = 0; i < words.length; i++){
    var currentWord = words[i]
    if (currentWord.length > maxLength) {
      maxLength = currentWord.length;
      longestWord = [currentWord];
    } else if (currentWord.length === maxLength) {
      longestWord.push(currentWord);
    }
  }
 alert(longestWord)
 document.getElementById("output").innerHTML = longestWord
}

findLongestWord()