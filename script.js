const addButton = document.getElementById("new-item-button");
const popUp = document.getElementById("popup");
const closeIcon = document.getElementById("close-icon");
const popUpForm = document.getElementById("popup-form");
const inputClient = document.getElementById("client");
const inputTitle = document.getElementById("title");
const submitButton = document.getElementById("submit-btn");
const priorityOption = document.getElementById("priority");
const levelOfEffortOption = document.getElementById("level-of-effort");

// ----------------------------------------------------------------

const removePopUp = function () {
  popUp.classList.add("hidden");
  inputTitle.classList.remove("border");
  inputTitle.classList.remove("border-red-600");
  inputClient.classList.remove("border");
  inputClient.classList.remove("border-red-600");
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

const submitPopUp = function () {
  if (
    !inputTitle.classList.contains("border") &&
    !inputClient.classList.contains("border")
  ) {
    inputTitle.value = "";
    inputClient.value = "";
    levelOfEffortOption.value = "Easy";
    priorityOption.value = "High";
    popUp.classList.add("hidden");
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

inputClient.addEventListener("click", function () {
  inputClient.classList.remove("border");
  inputClient.classList.remove("border-red-600");
});

inputTitle.addEventListener("click", function () {
  inputTitle.classList.remove("border");
  inputTitle.classList.remove("border-red-600");
});

submitButton.addEventListener("click", submitPopUp);

// ----------------------------------------------------------------
