window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("active", window.scrollY > 10);
});

let toggles = document.querySelector(".toggel");
let navlist = document.querySelector(".navlist");
toggles.addEventListener("click", () => {
  toggles.classList.toggle("active");
  navlist.classList.toggle("active");
});
