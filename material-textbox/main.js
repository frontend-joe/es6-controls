const input = document.querySelector("#input");

const handleChange = (event) => {
  input.classList.toggle("has-value", event.target.value);
};
