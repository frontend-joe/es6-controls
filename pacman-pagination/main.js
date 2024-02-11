const pacman = document.querySelector(".pacman");

let isReversing = false;
let previousPage = 0;

const togglePage = (page) => {
  isReversing = previousPage > page;
  previousPage = page;

  const pacmanTranslate = page > 0 ? page * 100 : 0;

  pacman.classList.toggle("reverse", isReversing);
  pacman.style.translate = `${pacmanTranslate}%`;
};
