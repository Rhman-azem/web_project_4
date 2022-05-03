document.getElementById("edit").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});

let formElement = document.querySelector("form");
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector("#nameInput").value;
  let jobInput = document.querySelector("#aboutInput").value;
  let showname = document.getElementById("name");
  let showabout = document.getElementById("about");
  showname.textContent = nameInput;
  showabout.textContent = jobInput;

  document.querySelector(".popup").style.display = "none";
}

formElement.addEventListener("submit", handleProfileFormSubmit);

let xButton = document.querySelector(".popup__x-button");

function handlePopupClose() {
  document.querySelector(".popup").style.display = "none";
}

xButton.addEventListener("click", handlePopupClose);
