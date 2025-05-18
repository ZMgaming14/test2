document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Dummy-Daten für Demo
  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    // Erfolgreich eingeloggt
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-msg").textContent = "Falscher Benutzername oder Passwort!";
  }
});
