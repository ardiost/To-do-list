const addButton = document.getElementById("new-item-button");
const popUp = document.getElementById("popup");
const closeIcon = document.getElementById("close-icon");
const popUpForm = document.getElementById("popup-form");
const inputClient = document.getElementById("client");
const inputTitle = document.getElementById("title");
const submitButton = document.getElementById("submit-btn");

// ----------------------------------------------------------------

const removePopUp = function () {
  popUp.classList.add("hidden");
};

const popupValidation = function () {
  if (inputClient.value == "" || inputClient.value == null) {
    inputClient.classList.add("border");
    inputClient.classList.add("border-red-600");
  }
  if (inputTitle.value == "" || inputTitle.value == null) {
    inputTitle.classList.add("border");
    inputTitle.classList.add("border-red-600");
  }
};

// ----------------------------------------------------------------

popUpForm.addEventListener("click", function preventClick(event) {
  event.stopImmediatePropagation();
});

addButton.addEventListener("click", function openPopUp() {
  popUp.classList.remove("hidden");
});

closeIcon.addEventListener("click", removePopUp);

popUp.addEventListener("click", removePopUp);

submitButton.addEventListener("click", popupValidation);

// ----------------------------------------------------------------
