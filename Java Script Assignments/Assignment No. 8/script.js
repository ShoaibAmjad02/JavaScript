// Given array
let arr = [2, 5, 8, 11, 14, 17];  // Example array
let k = 5; // Number of random numbers
let evenArray = [];

// Array to store random numbers
let randoms = [];

// Generate k random numbers between 1 to 10
for (let i = 0; i < k; i++) {
    randoms[i] = Math.floor(Math.random() * 10) + 1;
}

// Count even numbers in arr
let evenCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
        evenArray.push(arr[i])
    }
}
   console.log(evenArray)
// Check if evenCount matches any random number
let matchFound = false;
for (let i = 0; i < randoms.length; i++) {
    if (randoms[i] === evenCount) {
        matchFound = true;
        break;
    }
}

// Print result
if (matchFound) {
    console.log("Match Found!");
} else {
    console.log("No Match!");
}

console.log("Random Numbers:", randoms);
console.log("Even Count:", evenCount);

// Output on page
document.getElementById("arr").innerText = "Given Array: " + arr;
document.getElementById("randoms").innerText = "Random Numbers: " + randoms;
document.getElementById("evenCount").innerText = "Even Numbers Count: " + evenCount;
document.getElementById("result").innerText = matchFound ? "Match Found!" : "No Match!";