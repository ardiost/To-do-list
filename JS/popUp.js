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

export const removePopUp = function () {
  popUp.classList.add("hidden");
  inputTitle.classList.remove("border");
  inputTitle.classList.remove("border-red-600");
  inputClient.classList.remove("border");
  inputClient.classList.remove("border-red-600");
};

export const openPopUp = function () {
  popUp.classList.remove("hidden");
};

export const preventClick = function (event) {
  event.stopImmediatePropagation();
};

export const resetPopUp = function () {
  inputTitle.value = "";
  inputClient.value = "";
  levelOfEffortOption.value = "Easy";
  priorityOption.value = "High";
  popUp.classList.add("hidden");
};
