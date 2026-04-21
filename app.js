let user = localStorage.getItem("loggedUser");

if (!user) {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}

function goProfile() {
  window.location.href = "profile.html";
}