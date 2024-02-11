const submit = document.querySelector("#submit");

const handleChange = (event) => {
  event.target.classList.toggle("has-value", event.target.value);
  submit.disabled = !event.target.validationMessage ? "" : "disabled";
};
