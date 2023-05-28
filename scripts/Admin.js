const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("expanded");
});