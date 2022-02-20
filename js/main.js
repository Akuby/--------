const 삼선 = document.querySelector('.삼선');
const menuPart = document.querySelector('.menuPart');
const snsPart = document.querySelector('.snsPart');

삼선.addEventListener('click', () => {

  menuPart.classList.toggle('active');
  snsPart.classList.toggle('active');

}
  )