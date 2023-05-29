const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const toggle = document.getElementById("toggle");
const bankTransactionsTable = document.querySelector(".bank-transactions");
const creditCardTransactionsTable = document.querySelector(
  ".credit-card-transactions"
);

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("expanded");
});

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    bankTransactionsTable.style.display = "none";
    creditCardTransactionsTable.style.display = "table";
  } else {
    bankTransactionsTable.style.display = "table";
    creditCardTransactionsTable.style.display = "none";
  }
});
