import { submitPopUp } from "./submitPopup.js";
import { findTask } from "./findTask.js";
import { removePopUp, openPopUp, preventClick } from "./popUp.js";
import { loadlocalstorage } from "./localstorage.js";
import {
  addButton,
  popUp,
  closeIcon,
  popUpForm,
  inputClient,
  inputTitle,
  submitButton,
  doingList,
  priorityOption,
  levelOfEffortOption,
  toDoList,
  DoneList,
} from "./declare.js";
import {
  removeTitleBorder,
  removeClientBorder,
  popupValidation,
} from "./popUpValidation.js";
import { Task } from "./Task.js";
// ----------------------------------------------------------------

loadlocalstorage();

// ----------------------------------------------------------------

window.addEventListener("load", findTask);

popUpForm.addEventListener("click", preventClick);

addButton.addEventListener("click", openPopUp);

closeIcon.addEventListener("click", removePopUp);

popUp.addEventListener("click", removePopUp);

submitButton.addEventListener("click", popupValidation);

inputClient.addEventListener("click", removeClientBorder);

inputTitle.addEventListener("click", removeTitleBorder);

submitButton.addEventListener("click", submitPopUp);



// ----------------------------------------------------------------
