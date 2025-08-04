const name = ["Shoaib", "Ariz", "Ali", "Yahya"];
const getFilter = prompt("Enter a name to search:");
const convertLowerCase = getFilter.toLowerCase();

const results = [];

for (let i = 0; i < name.length; i++) {
  if (name[i].toLowerCase().includes(convertLowerCase)) {
    results.push(name[i]);
  }
}

if (results.length > 0) {
  alert("Matched Users: " + results.join(", "));
  document.getElementById("output").textContent = "Matched Users: " + results.join(", ");
} else {
  alert("No users found matching your search.");
  document.getElementById("output").textContent = "No users found matching your search.";
}
