import { fetchFriendList } from "./fakeApi.js";

const domElements = {
  loader: document.querySelector(".loader-wrap"),
  friendList: document.querySelector(".fl-list"),
  friendListSection: document.querySelector(".fl-section"),
  headingSection: document.querySelector(".hd-section"),
  inviteButtonWrap: document.querySelector(".button-wrap"),
  inviteButton: document.querySelector('[data-action="openLink'),
  referenceLinkBackdrop: document.querySelector(".ref-link-backdrop"),
  copyButton: document.querySelector('[data-action="copyLink"]'),
  notification: document.querySelector(".ref-notification"),
};

const timeOut = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

addMarkup();

// --------------------Creating Upgrade markup-------------------

async function addMarkup() {
  domElements.loader.classList.remove("hidden");

  // Imitation fetch delay----------------------------------delete this
  const pause = await timeOut(800);
  // LOADER

  try {
    const friendListData = await fetchFriendList();
    const markupFriendList = createFriendListMarkup(friendListData);

    domElements.loader.classList.add("hidden");
    domElements.friendList.innerHTML = markupFriendList;
    domElements.headingSection.classList.add("shown");
    domElements.friendList.classList.add("shown");
    domElements.inviteButtonWrap.classList.add("shown");
  } catch (error) {
    domElements.loader.children[1].innerHTML =
      "Something went wrong, please try again...";
  }
}

function createFriendListMarkup(data) {
  const markup = data.map(({ id, coins, photoUrl }) => {
    let pictureWrapClass = "hasPicture";
    if (!photoUrl) {
      photoUrl = "../img/svg/user-icon.svg";
      pictureWrapClass = "";
    }
    return `
            <li class="fl-list-item">
                    <div class="user-icon-wrap fl ${pictureWrapClass}">
                    <img src="${photoUrl}" alt="" />
                    </div>
                    <div class="fl-content">
                    <div class="fl-text-wrap">
                        <h2 class="fl-title">#user_${id}</h2>
                        <p class="fl-balance">${coins[0].value} ${coins[0].code} | ${coins[1].value} ${coins[1].code} </p>
                    </div>
                    </div>
            </li>
        `;
  });
  return markup.join("");
}

// --------------------Invite ref link wrap-------------------

domElements.inviteButton.addEventListener("click", handleLinkOpen);
let touchstartY = 0;
let touchendY = 0;
function handleTouchStart(e) {
  touchstartY = changedTouches[0].screenY;
}

function handleTouchEnd(e) {
  touchendY = e.changedTouches[0].screenY;
  checkDirection();
}

function checkDirection() {
  if (touchendY > touchstartY) closeRefLink();
}

function handleLinkOpen(e) {
  domElements.referenceLinkBackdrop.classList.add("shown");
  domElements.referenceLinkBackdrop.addEventListener(
    "touchstart",
    handleTouchStart
  );
  domElements.referenceLinkBackdrop.addEventListener("touched", handleTouchEnd);
  domElements.referenceLinkBackdrop.addEventListener("click", checkIsBackdrop);
}

function closeRefLink() {
  domElements.referenceLinkBackdrop.classList.remove("shown");
  domElements.referenceLinkBackdrop.removeEventListener(
    "touchstart",
    handleTouchStart
  );
  domElements.referenceLinkBackdrop.removeEventListener(
    "touchend",
    handleTouchEnd
  );
  domElements.referenceLinkBackdrop.removeEventListener(
    "click",
    checkIsBackdrop
  );
}

function checkIsBackdrop(e) {
  if (e.target === e.currentTarget) closeRefLink();
}

domElements.copyButton.addEventListener("click", handleCopyButton);

function handleCopyButton() {
  //-------paste here referral link for copy
  let link = "Your ref Link";

  domElements.notification.classList.add("shown");
  navigator.clipboard
    .writeText(link)
    .then(() => {})
    .catch((error) => {
      console.log("Something went wrong", error);
    });
  setTimeout(() => {
    domElements.notification.classList.remove("shown");
  }, 3000);
}
