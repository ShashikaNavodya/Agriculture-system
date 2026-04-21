function register() {
  let user = document.getElementById("regUser").value.trim();
  let pass = document.getElementById("regPass").value.trim();

  if (!user || !pass) {
    document.getElementById("regMsg").innerText = "Fill all fields";
    return;
  }

  if (localStorage.getItem(user)) {
    document.getElementById("regMsg").innerText = "User already exists";
    return;
  }

  localStorage.setItem(user, pass);
  document.getElementById("regMsg").innerText = "Registered Successfully!";
}

function login() {
  let user = document.getElementById("loginUser").value.trim();
  let pass = document.getElementById("loginPass").value.trim();

  let storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    localStorage.setItem("loggedUser", user);
    window.location.href = "index.html";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid Username or Password";
  }
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}