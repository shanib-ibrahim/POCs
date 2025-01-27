const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is Required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is Required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be atleast 8 character");
  } else {
    setSuccess(password);
  }

  if (cpasswordValue === "") {
    setError(cpassword, "Please Confirm Your Password");
  } else if (cpasswordValue !== password) {
    setError(password, "Password does not match");
  } else {
    setSuccess(cpassword);
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {};
