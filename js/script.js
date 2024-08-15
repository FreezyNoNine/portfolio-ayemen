const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.querySelector(".nav-mobile");

navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("active");
});
