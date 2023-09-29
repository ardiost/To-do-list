import {
  addButton,
  popUp,
  closeIcon,
  popUpForm,
  inputClient,
  inputTitle,
  submitButton,
  priorityOption,
  levelOfEffortOption,
  toDoList,
  DoneList,
} from "./declare.js";

const removePopUp = function () {
  popUp.classList.add("hidden");
  inputTitle.classList.remove("border");
  inputTitle.classList.remove("border-red-600");
  inputClient.classList.remove("border");
  inputClient.classList.remove("border-red-600");
};

popUpForm.addEventListener("click", function preventClick(event) {
  event.stopImmediatePropagation();
});

addButton.addEventListener("click", function openPopUp() {
  popUp.classList.remove("hidden");
});

closeIcon.addEventListener("click", removePopUp);

popUp.addEventListener("click", removePopUp);
