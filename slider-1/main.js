const output = document.querySelector("#output"),
  bar = document.querySelector("#bar"),
  svg = document.querySelector("#svg"),
  size = document.querySelector("#size"),
  thumbSize = 16;

const min = Number(size.getAttribute("min")),
  max = Number(size.getAttribute("max")),
  tooltipSize = Number(output.clientWidth);

const handleChange = (event) => {
  const { value } = event.target;
  const valueNumber = Number(value);
  const valueString = `${value}px`;
  const pos = (valueNumber - min) / (max - min);
  const thumbCorrect = thumbSize * (pos - 0.5) * -1;

  const outputLeft = `${Math.round(
    pos * 200 - tooltipSize / 4 + thumbCorrect
  )}px`;

  output.style.left = outputLeft;
  output.innerHTML = valueString;
  bar.style.width = valueString;
  svg.style.width = valueString;
};
