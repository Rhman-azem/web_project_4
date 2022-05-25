/**** Selectors ****/

const edit = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const xButton = document.querySelector(".popup__x-button");

const showName = document.querySelector(".profile__info-name");
const showAbout = document.querySelector(".profile__info-about");

const formElement = document.querySelector("form");

const profileInputName = document.querySelector(".popup-contents__input_type_name");
const profileInputAbout = document.querySelector(".popup-contents__input_type_about");



/****  Functions ****/

function handleProfileInput(){
  profileInputName.value = showName.textContent;
  profileInputAbout.value = showAbout.textContent;
}

function saveProfileForm(){
  showName.textContent = profileInputName.value;
  showAbout.textContent = profileInputAbout.value;
  handlePopupClose();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  saveProfileForm();
}

function handlePopupClose() {
  popup.classList.remove("popup_active");
}

function handlePopupOpen () {
  popup.classList.add("popup_active");
}




/**** EventListeners ****/

edit.addEventListener("click", handlePopupOpen);
xButton.addEventListener("click", handlePopupClose);
formElement.addEventListener("submit", handleProfileFormSubmit);