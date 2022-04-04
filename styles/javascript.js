let yosemiteButton = document.querySelector("#yosemite");
let lakeButton = document.querySelector("#lake");
let mountainsButton = document.querySelector("#mountains");
let latemarButton = document.querySelector("#latemar");
let vanoiseButton = document.querySelector("#vanoise");
let lagoButton = document.querySelector("#lago");

yosemiteButton.addEventListener("click", LIKEyosemite);
lakeButton.addEventListener("click", LIKElake);
mountainsButton.addEventListener("click", LIKEmountains);
latemarButton.addEventListener("click", LIKElatemar);
vanoiseButton.addEventListener("click", LIKEvanoise);
lagoButton.addEventListener("click", LIKElago);

function LIKEyosemite() {
  yosemiteButton.classList.toggle("cards__like-button_active");
}
function LIKElake() {
  lakeButton.classList.toggle("cards__like-button_active");
}
function LIKEmountains() {
  mountainsButton.classList.toggle("cards__like-button_active");
}
function LIKElatemar() {
  latemarButton.classList.toggle("cards__like-button_active");
}

function LIKEvanoise() {
  vanoiseButton.classList.toggle("cards__like-button_active");
}

function LIKElago() {
  lagoButton.classList.toggle("cards__like-button_active");
}
/*-------------------------------------------------------------------------------------*/
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
  console.log(showname);
  document.querySelector(".popup").style.display = "none";
}

formElement.addEventListener("submit", handleProfileFormSubmit);
