import { submitPopUp } from "./submitPopup.js";
import { changestatus } from "./changestatus.js";
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
// ----------------------------------------------------------------

loadlocalstorage();
changestatus();

// ----------------------------------------------------------------
popUpForm.addEventListener("click", preventClick);

addButton.addEventListener("click", openPopUp);

closeIcon.addEventListener("click", removePopUp);

popUp.addEventListener("click", removePopUp);

submitButton.addEventListener("click", popupValidation);

inputClient.addEventListener("click", removeClientBorder);

inputTitle.addEventListener("click", removeTitleBorder);

submitButton.addEventListener("click", submitPopUp);


// ----------------------------------------------------------------
