import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
  let bulletCount = document.querySelectorAll('.testimonials-section__item').length;
  let bulletWrapper = document.querySelector('.testimonials-section__slider-bullets');

  for (let index = 0; index < bulletCount; index++) {
    const button = document.createElement('button');
    button.className = 'glide__bullet testimonials-section__slider-bullet';
    button.setAttribute("data-glide-dir", '=' + index);
    bulletWrapper.appendChild(button);
  }

  new Glide('.testimonials-section__slider', {
    type: 'carousel'
  }).mount()

})
