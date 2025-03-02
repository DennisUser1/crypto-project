const domElements = {
  menu: document.querySelector(".menu"),
  menuButton: document.querySelector(".header-menu-button"),
  languageButton: document.getElementById("lng-btn"),
  inviterMenuButton: document.getElementById("inv-btn"),
  logoutButton: document.getElementById("logout-btn"),
  bindButton: document.querySelector('[data-action="bindInviter"]'),
  invLinkBackdrop: document.querySelector(".inv-link-backdrop"),
  footerLinks: document.querySelectorAll(".footer-button-item"),
  inviterForm: document.querySelector(".inv-form"),
  inviterNotification: document.querySelector(".inv-notification"),
};

// -----------Open Menu-------------------
domElements.menuButton.addEventListener("click", toggleMenu);
let footerActiveLinkIndex = 0;
domElements.footerLinks.forEach((link, index) => {
  if (link.classList.contains("active")) footerActiveLinkIndex = index;
});

function toggleMenu() {
  domElements.menu.classList.toggle("shown");
  domElements.menuButton.classList.toggle("active");
  domElements.footerLinks[footerActiveLinkIndex].classList.toggle("active");
}

// -----------Menu Inviter Logic-------------------
domElements.inviterMenuButton.addEventListener("click", handleMenuInviterOpen);

let touchstartY = 0;
let touchendY = 0;
function handleTouchStart(e) {
  touchstartY = e.changedTouches[0].screenY;
}
function handleTouchEnd(e) {
  touchendY = e.changedTouches[0].screenY;
  checkDirection();
}

function checkDirection() {
  if (touchendY > touchstartY) closeMenuInviterLink();
}

function handleMenuInviterOpen(e) {
  domElements.invLinkBackdrop.classList.add("shown");
  domElements.invLinkBackdrop.addEventListener("touchstart", handleTouchStart);
  domElements.invLinkBackdrop.addEventListener("touchend", handleTouchEnd);
  domElements.invLinkBackdrop.addEventListener("click", checkIsBackdrop);
}

function closeMenuInviterLink() {
  domElements.invLinkBackdrop.classList.remove("shown");
  domElements.invLinkBackdrop.removeEventListener(
    "touchstart",
    handleTouchStart
  );
  domElements.invLinkBackdrop.removeEventListener("touchend", handleTouchEnd);
  domElements.invLinkBackdrop.removeEventListener("click", heckIsBackdrop);
}

function checkIsBackdrop(e) {
  if (e.target === e.currentTarget) closeMenuInviterLink();
}

domElements.inviterForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  if (e.target.elements.inputLink.value.trim() !== "") {
    domElements.inviterNotification.textContent = "Recover Done!";
    domElements.inviterNotification.classList.remove("fail");
    domElements.inviterNotification.classList.add("shown");
    e.target.elements.inputLink.value = "";
    setTimeout(() => {
      closeMenuInviterLink();
    }, 2000);
  } else {
    domElements.inviterNotification.textContent = 'Empty value';
    domElements.inviterNotification.classList.add('fail');
    domElements.inviterNotification.classList.add('shown');
  }
  setTimeout(() => {
    domElements.inviterNotification.classList.remove('shown');
  }, 3000);
}

// -----------Logout ------------------------

domElements.logoutButton.addEventListener;
