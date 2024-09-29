document.getElementById("btn-add-money").addEventListener("click", function (event) {
  event.preventDefault();

  // Get input values
  const amount = parseFloat(document.getElementById("amount-input").value);
  const pin = document.getElementById("input-pin-number").value;

  // Validate amount
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  // Validate PIN (replace with actual authentication logic)
  if (pin !== "1234") {
    alert("Incorrect PIN. Please try again.");
    return;
  }

  // Update balance (replace with server-side logic)
  const currentBalance = parseFloat(document.getElementById("account-balance").innerText);
  const newBalance = currentBalance + amount;
  document.getElementById("account-balance").innerText = newBalance;
  
  // Provide feedback
  alert("Money added successfully! Your new balance is: " + newBalance);

  // Clear form fields
  document.getElementById("add-money-form").reset();
});