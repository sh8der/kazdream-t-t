import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
  let bulletCount = document.querySelectorAll('.hero-slider__item').length;
  let bulletWrapper = document.querySelector('.glide__bullets');

  for (let index = 0; index < bulletCount; index++) {
    const button = document.createElement('button');
    button.className = 'glide__bullet hero-slider__bullet';
    button.setAttribute("data-glide-dir", '=' + index);
    bulletWrapper.appendChild(button);
  }

  new Glide('.glide', {
    type: 'carousel'
  }).mount()

})