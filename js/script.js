// import data from "projects";

const sideNav = document.querySelector("#phone--sidenav");
const sideNavLink = document.querySelectorAll(".sidenav--link");
const mainDiv = document.querySelector(".main");
const mobileHamburger = document.querySelector(".mobile--hamburger");
const modalContainer = document.querySelector(".modal-window__container");
const modalXButton = document.querySelector(".modal--button");
const modalContent = document.querySelector(".modal--project");
const projectButtons = document.querySelectorAll(".project--button");

// Open Mobile Nav Function
function openNav() {
  sideNav.style.width = "200px";
  mainDiv.style.marginLeft = "200px";
  mainDiv.style.opacity = ".7";
  mobileHamburger.style.visibility = "hidden";
}

// Close Mobile Nav Function
function closeNav() {
  sideNav.style.width = "0px";
  mainDiv.style.marginLeft = "0";
  mainDiv.style.opacity = "1";
  mobileHamburger.style.visibility = "visible";
}

// Add Event Listeners to close Mobile Nav when a link is clicked.
sideNavLink.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// Close Modal Window when button is clicked
modalXButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
  modalContent.innerHTML = "";
});

// Additionally, close the window if the user clicks outside of the modal window
window.onclick = function (e) {
  if (e.target == modalContainer) {
    modalContainer.style.display = "none";
    modalContent.innerHTML = "";
  }
};

// Open Modal Listeners

for (let button = 0; button < projectButtons.length; button++) {
  projectButtons[button].id = button;
}

projectButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    createModal(e.target.id);
  });
});

// Create Modal Function

const createModal = (id) => {
  const project = data[id];
  modalContainer.style.display = "block";
  const content = `
  <h2 class="modal--h2">${project.title}</h2>
  <img src=${project.image}>
  <p>${project.description}</p>
  <div class="project__links">
    <a href="${project.live}" target="_blank" class="live--button bouncy">LIVE LINK</a>
    <a href=${project.github} target="_blank" class="live--button bouncy" style="animation-delay:0.07s">GITHUB REPO</a>
  </div>
  `;
  modalContent.insertAdjacentHTML("beforeend", content);
};
