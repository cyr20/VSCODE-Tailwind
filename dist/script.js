const toggle = document.querySelector(".toggle-menu");
const menu = document.querySelector(".header__navi");
const header = document.querySelector(".header");
const ul = document.querySelector(".header__ul");
const dlbutton = document.querySelector(".banner__download__button");
const dropdown = document.querySelector(".banner__dropdown");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 20) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  menu.classList.toggle("open");
  header.classList.toggle("open");
  ul.classList.toggle("open");
});

dlbutton.addEventListener("click", () => {
  dlbutton.classList.toggle("open");
  dropdown.classList.toggle("open");
});

var slider = tns({
  container: ".slider__content",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controlsText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
  nav: false,
});
