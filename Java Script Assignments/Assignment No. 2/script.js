// Variables in JS
// Variables are used to store data values. In JavaScript, there are three ways to declare variables: var, let, and const.
// - `var`: Declares a variable that can be re-assigned.
// - `let`: Declares a block-scoped variable that can be re-assigned.
// - `const`: Declares a block-scoped variable that cannot be re-assigned.
// Example:
let name = "Shoaib"; // Using let to declare a variable
const age = 15; // Using const to declare a constant variable
var city = "Islamabad"; // Using var to declare a variable
// Output in HTML
// Output in Alert Box
alert("Name: " + name + "\nAge: " + age + "\nCity: " + city);
// Output in Console
console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);
/* This code declares three variables using different methods in JavaScript:
1. `let name = "Shoaib";` - This declares a variable `name` using `let`, which allows the variable to be re-assigned later if needed.
2. `const age = 15;` - This declares a constant variable `age` using `const`, which means the value cannot be changed later.
3. `var city = "Islamabad";` - This declares a variable `city` using `var`, which is function-scoped and can be re-assigned. */

// Data Types in JavaScript
// JavaScript has 8 data types, including:
// 1. Number: Represents both integer and floating-point numbers.
// 2. String: Represents a sequence of characters enclosed in quotes.
// 3. Boolean: Represents a logical entity and can have two values: true or false.
// 4. Undefined: A variable that has been declared but not assigned a value.
// 5. Null: Represents the intentional absence of any object value.
// 6. Symbol: Represents a unique and immutable value, often used as object property keys.
// 7. Object: A collection of key-value pairs, where keys are strings and values can be any data type.
var number = 42; // Number data type
var string = "Hello, World!"; // String data type
var boolean = true; // Boolean data type
var undefinedVar; // Undefined data type
var nullVar = null; // Null data type
var objectVar = { key: "value" }; // Object data type
console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Undefined:", undefinedVar);
console.log("Null:", nullVar);
console.log("Object:", objectVar);

// Calculator Function using pop-up Box and if-else function
function calculator() {
  let num1 = parseFloat(prompt("Please Enter first number:"));
  let operator = prompt("Enter Operation (+, -, *, /):");
  let num2 = parseFloat(prompt("Enter second number:"));
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      alert("0 is not allowed for division!");
      return;
    }
    result = num1 / num2;
  } else {
    alert("Invalid Operations!");
    return;
  }

  alert("Result: " + result);
}

// This function prompts the user to enter two numbers and an operator, performs the specified operation, and displays the result in an alert box. It also handles division by zero and invalid operations.