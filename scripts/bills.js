const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("expanded");
});

document.addEventListener("DOMContentLoaded", function () {
  const payInFullButtons = document.querySelectorAll(".pay-in-full-btn");

  payInFullButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const bill = button.closest(".bill");
      bill.classList.add("bill-hide");
      alert("Payment Successful");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const payBankAccBtn = document.querySelectorAll(".pay-bank-account-btn");

  payBankAccBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      const bill = button.closest(".bill");
      bill.classList.add("bill-hide");
      alert("Payment Successful");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const payPartiallyButtons = document.querySelectorAll(".pay-partially-btn");

  payPartiallyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const bill = button.closest(".bill");
      const billAmount = bill.querySelector(".bill-amount").textContent;
      const paymentAmount = prompt("Enter payment amount:");

      if (paymentAmount !== null) {
        const remainingAmount =
          parseFloat(billAmount.replace("$", "")) - parseFloat(paymentAmount);
        bill.querySelector(".bill-amount").textContent =
          "$" + remainingAmount.toFixed(2);
        alert("Payment Successful");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const setReminderButtons = document.querySelectorAll(".set-reminder-btn");

  setReminderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("A reminder has been set");
    });
  });
});
