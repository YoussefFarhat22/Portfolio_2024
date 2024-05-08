const menu = document.querySelector(".close");
const navBar = document.querySelector(".nav-links");

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
