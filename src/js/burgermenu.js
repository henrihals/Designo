const menu = document.querySelector(".menuBurger");
const Nav = document.querySelector(".list_nav_header");
const menuExit = document.querySelector(".menuBurgerExit");

menu.addEventListener("click", () => {
  Nav.classList.add("active");
  menu.classList.add("passive");
  menuExit.classList.add("active");
});

menuExit.addEventListener("click", () => {
  Nav.classList.remove("active");
  menu.classList.remove("passive");
  menuExit.classList.remove("active");
});
