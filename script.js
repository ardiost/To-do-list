const addButton = document.getElementById("new-item-button");
const popUp = document.getElementById("popup");
const closeIcon = document.getElementById("close-icon");
const popUpForm = document.getElementById("popup-form");

// ----------------------------------------------------------------

function removePopUp() {
  popUp.classList.add("hidden");
}

// ----------------------------------------------------------------
popUpForm.addEventListener("click", function preventClick(event) {
  event.stopImmediatePropagation();
});

addButton.addEventListener("click", function openPopUp() {
  popUp.classList.remove("hidden");
});

closeIcon.addEventListener("click", removePopUp);
popUp.addEventListener("click", removePopUp);
