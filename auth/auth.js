const API_URL = "https://axionics-api.axionics.workers.dev";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function signupFormHandler(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const errorBox = document.getElementById("error");

  errorBox.textContent = "";

  if (!name || !email || !password) {
    errorBox.textContent = "All fields are required.";
    return;
  }

  if (!validateEmail(email)) {
    errorBox.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 8) {
    errorBox.textContent = "Password must be at least 8 characters.";
    return;
  }

  alert("Frontend validation passed. Backend will be connected next.");
}

function loginFormHandler(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const errorBox = document.getElementById("error");

  errorBox.textContent = "";

  if (!email || !password) {
    errorBox.textContent = "Email and password are required.";
    return;
  }

  alert("Frontend validation passed. Backend will be connected next.");
}
