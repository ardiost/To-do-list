const addButton = document.getElementById("new-item-button");
const popUp = document.getElementById("popup");
const closeIcon = document.getElementById("close-icon");
const popUpForm = document.getElementById("popup-form");
const textInput = Array.from(document.querySelectorAll("input"));

// ----------------------------------------------------------------

function removePopUp() {
  popUp.classList.add("hidden");
}

// ----------------------------------------------------------------

addButton.addEventListener("click", function openPopUp() {
  popUp.classList.remove("hidden");
  console.log(textInput);
});

closeIcon.addEventListener("click", removePopUp);
popUp.addEventListener("click", removePopUp);
