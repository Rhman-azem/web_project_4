let edit = document.querySelector(".profile__info-edit-button");
let popup = document.querySelector(".popup");
let xButton = document.querySelector(".popup__x-button");

let jobInput;
let nameInput;
let showname = document.querySelector(".profile__info-name");
let showabout = document.querySelector(".profile__info-about");

edit.addEventListener("click", function () {
  popup.classList.add("popup_active");
});

const formElement = document.querySelector("form");

function handleProfileFormSubmit(evt) {
  
  evt.preventDefault();
  nameInput = document.querySelector(".popup-contents__input_type_name").value;
  jobInput = document.querySelector(".popup-contents__input_type_about").value;

  showname.textContent = nameInput;
  showabout.textContent = jobInput;
  popup.classList.remove("popup_active");
}

formElement.addEventListener("submit", handleProfileFormSubmit);



function handlePopupClose() {
  popup.classList.remove("popup_active");
}

xButton.addEventListener("click", handlePopupClose);
