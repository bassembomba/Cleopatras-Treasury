document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("login-username");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value.trim().toLowerCase();

    if (username === "bassem") {
      window.location.href = "UserHome.html";
    } else if (username === "bassembanker") {
      window.location.href = "homeBanker.html";
    } else if (username === "bassemadmin") {
      window.location.href = "Admin.html";
    } else {
      alert("Invalid username");
    }
  });
});
