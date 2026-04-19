
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const form = document.getElementById("registerForm");
const errorMessage = document.getElementById("error");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

emailInput.addEventListener("input", () => {
  if (!validateEmail(emailInput.value)) {
    errorMessage.textContent = "Email format is not valid";
  } else {
    errorMessage.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  if (!validatePassword(passwordInput.value)) {
    errorMessage.textContent = "Password must be at least 6 characters";
  } else {
    errorMessage.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!validateEmail(email)) {
    errorMessage.textContent = "Invalid email format";
    return;
  }

  if (!validatePassword(password)) {
    errorMessage.textContent = "Weak password";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match";
    return;
  }

  errorMessage.textContent = "";
  alert("User registered successfully!");
});