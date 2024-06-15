const menu = document.querySelector(".close");
const navBar = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");

menu.addEventListener("click", () => {
  let visible = navBar.getAttribute("data-visible");

  if (visible === "false") {
    navBar.setAttribute("data-visible", true);
    menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    navBar.setAttribute("data-visible", false);
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.setAttribute("data-visible", false);
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  });
});
