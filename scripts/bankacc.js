const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("expanded");
});

function displayAlert() {
  alert("bank account closed successfully!");
  return false;
}
function displayOpen() {
  alert("bank account opened successfully!");
  return false;
}
function displayTransfer() {
  alert("your money has been transferred successfully!");
  return false;
}
