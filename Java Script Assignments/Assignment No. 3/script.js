function show(msg) {
  console.log(msg);
  var box = document.createElement("div");
  box.className = "output-box";
  box.innerHTML = msg;
  document.getElementById("results").appendChild(box);
}

// 1. Basic Calculator
var num1 = 10;
var num2 = 5;

var sum = num1 + num2;
var diff = num1 - num2;
var prod = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

show("The sum of " + num1 + " and " + num2 + " is " + sum);
show("The difference of " + num1 + " and " + num2 + " is " + diff);
show("The product of " + num1 + " and " + num2 + " is " + prod);
show("The division of " + num1 + " by " + num2 + " is " + div);
show("The modulus of " + num1 + " and " + num2 + " is " + mod);

// 2. Increment / Decrement
var counter = 10;
counter++;
counter--;
show("The final value of counter is " + counter);

// 3. Area of Rectangle
var length = 8;
var width = 6;
var area = length * width;
show("The area of the rectangle is " + area);

// 4. Celsius to Fahrenheit
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
show(celsius + "°C is equal to " + fahrenheit + "°F");

// 5. Simple Interest
var principal = 1000;
var rate = 5;
var time = 2;
var interest = (principal * rate * time) / 100;
show("The simple interest is RS: " + interest);