/* =========================
   CONFIG
========================= */

// 🔴 CHANGE THIS to your real Worker URL
const API_URL = "https://axionics-api.axionics.workers.dev";

/* =========================
   HELPERS
========================= */

function $(id) {
  return document.getElementById(id);
}

function showError(msg) {
  const box = $("error");
  if (box) box.textContent = msg;
}

function clearError() {
  const box = $("error");
  if (box) box.textContent = "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* =========================
   SIGNUP
========================= */

async function signupFormHandler(e) {
  e.preventDefault();
  clearError();

  const name = $("name").value.trim();
  const email = $("email").value.trim();
  const password = $("password").value;

  if (!name || !email || !password) {
    showError("All fields are required.");
    return;
  }

  if (!validateEmail(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  if (password.length < 8) {
    showError("Password must be at least 8 characters.");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      showError(data.error || "Signup failed.");
      return;
    }

    alert("Account created successfully. Please log in.");
    window.location.href = "/auth/login/";

  } catch (err) {
    showError("Network error. Please try again.");
  }
}

/* =========================
   LOGIN (READY FOR NEXT STEP)
========================= */

async function loginFormHandler(e) {
  e.preventDefault();
  clearError();

  const email = $("email").value.trim();
  const password = $("password").value;

  if (!email || !password) {
    showError("Email and password are required.");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // 🔑 session cookie
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      showError(data.error || "Login failed.");
      return;
    }

    window.location.href = "/account/";

  } catch (err) {
    showError("Network error. Please try again.");
  }
}

/* =========================
   LOGOUT (FUTURE USE)
========================= */

async function logout() {
  await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include"
  });
  window.location.href = "/";
}
