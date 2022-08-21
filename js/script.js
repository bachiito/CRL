const toggleBtn = document.querySelector(".toggle-btn");
const listPrimaryNav = document.querySelector(".primary-nav__list-container");

toggleBtn.addEventListener("click", () => {
  listPrimaryNav.classList.toggle("active");
});
