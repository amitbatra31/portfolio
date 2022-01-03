const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".navToggle");

navToggle.addEventListener("click", () => {
  var visible = primaryNav.getAttribute("data-visible");
  if (!visible) {
    primaryNav.setAttribute("data-visible", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
  }
});
