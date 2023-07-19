const btnLogo = document.getElementById("btn-logo");
const menuResponsive = document.getElementById("menu");
const logoNav = document.getElementById("logo-animado");

btnLogo.addEventListener("click", (e) => {
  menuResponsive.classList.toggle("menu-responsive");
  logoNav.classList.toggle("logo-animado");
});
