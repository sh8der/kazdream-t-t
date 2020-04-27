import anime from "animejs/lib/anime.es"

document.addEventListener("DOMContentLoaded", () => {
  let navClass = "navigation-line";
  let menuButton = document.querySelector(`.${navClass}__toggle-menu`);
  let menuNode = document.querySelector(`.${navClass}__main-menu`);
  let menuItemList = document.querySelectorAll(`.${navClass}__main-menu-item`);
  const menuAnimeTl = anime.timeline({
    easing: 'easeOutExpo',
    autoplay: false,
  });

  menuAnimeTl
    .add({
      targets: menuNode,
      opacity: 1,
      duration: 250
    })
    .add({
      targets: menuItemList,
      opacity: 1,
      left: "0%",
      duration: 500,
      delay: function (el, i, l) {
        return i * 70;
      },
    });
  const menuDoAnim = () => {
    menuAnimeTl.play();
    menuAnimeTl.finished.then(() => {
      menuAnimeTl.reverse();
      menuButton.classList.toggle(`${navClass}__toggle-menu--in-action`);
    })
  }

  menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains(`${navClass}__toggle-menu--in-action`))
      return;
    menuNode.classList.add(`${navClass}__main-menu--show-on-mobile`);
    menuButton.classList.toggle(`${navClass}__toggle-menu--in-action`);
    setTimeout(() => {
      menuDoAnim()
    }, 100);
  });

});