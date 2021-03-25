const sideNav = document.querySelector("#phone--sidenav");
const sideNavLink = document.querySelectorAll(".sidenav--link");
const mainDiv = document.querySelector(".main");
const mobileHamburger = document.querySelector(".mobile--hamburger");

function openNav() {
  sideNav.style.width = "200px";
  mainDiv.style.marginLeft = "200px";
  mainDiv.style.opacity = ".7";
  mobileHamburger.style.visibility = "hidden";
}

function closeNav() {
  sideNav.style.width = "0px";
  mainDiv.style.marginLeft = "0";
  mainDiv.style.opacity = "1";
  mobileHamburger.style.visibility = "visible";
}

sideNavLink.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});
