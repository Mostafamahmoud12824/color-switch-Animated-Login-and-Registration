function changeColor(color) {
  const curved = document.getElementById('curved');
  const bgAnimate = document.querySelector('.bg-animate');
  curved.style.background = color;
  bgAnimate.style.background = color;
  bgAnimate.classList.add('active');
  setTimeout(() => {
    bgAnimate.classList.remove('active');
  }, 10);
}

const color = document.querySelectorAll('.color');

function activeColor() {
  color.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

color.forEach((item) =>
  item.addEventListener('click', activeColor)
);
