const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

const leftPosition = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.add("show");
    console.log("ok");
  }
});

closeNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.remove("show");
  }
});

