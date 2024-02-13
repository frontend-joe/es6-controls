const passwordInput = document.querySelector("#passwordInput");

const passwordIcon = document.querySelector("#passwordIcon");

const togglePassword = (e) => {
  const { length: passwordLength } = passwordInput.value;

  e.stopPropagation();
  if (passwordIcon.innerText === "visibility") {
    passwordIcon.innerText = "visibility_off";
    passwordInput.type = "text";
  } else {
    passwordIcon.innerText = "visibility";
    passwordInput.type = "password";
  }

  if (passwordLength) {
    passwordInput.focus();
  }
};
