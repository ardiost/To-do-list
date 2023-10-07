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

export const popupValidation = function () {
  if (inputClient.value == "" || inputClient.value == null) {
    inputClient.classList.add("border");
    inputClient.classList.add("border-red-600");
  }
  if (inputTitle.value == "" || inputTitle.value == null) {
    inputTitle.classList.add("border");
    inputTitle.classList.add("border-red-600");
  }
};
export const removeTitleBorder = function () {
  inputTitle.classList.remove("border");
  inputTitle.classList.remove("border-red-600");
};
export const removeClientBorder = function () {
  inputClient.classList.remove("border");
  inputClient.classList.remove("border-red-600");
};
