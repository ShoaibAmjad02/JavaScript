function calculateSplit() {
      let bill = parseFloat(document.getElementById('bill').value);
      let people = parseInt(document.getElementById('people').value);
      let resultBox = document.getElementById('result');

      if (bill > 0 && people > 0) {
        let tip = bill * 0.15;
        let total = bill + tip;
        let each = (total / people).toFixed(2);
        resultBox.style.color = "#007f5f";
        resultBox.innerText = `✅ Each person pays: RS: ${each}`;
      } else if (people <= 0) {
        resultBox.style.color = "#d00000";
        resultBox.innerText = "❌ Invalid number of people.";
      } else {
        resultBox.style.color = "#d00000";
        resultBox.innerText = "❌ Invalid bill amount.";
      }
    }