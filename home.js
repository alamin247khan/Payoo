// add money to the account

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Money add button clicked");
    const amountInput = document.getElementById("amount-input");
    const amount = amountInput.value;
    if (amount > 0) {
      console.log("Adding " + amount + " units to the balance");
    } else {
      alert("Please enter a valid amount.");
    }

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
  });
