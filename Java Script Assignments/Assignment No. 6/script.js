var array = ["completed", "in-progress", "review"];

var name = prompt("Enter your name:");
var progress = prompt("Enter your progress (completed, in-progress, nreview):");

if (progress === "completed") {
 array[0] = name
} else if (progress === "in-progress") {
  array[1] = name
} else if (progress === "review") {
        array[2] = name
} else {
  alert("Invalid progress status. Please enter 'completed', 'in-progress', or 'review'.");
}
console.log(array)