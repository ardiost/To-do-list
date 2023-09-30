import { submitPopUp } from "./submitPopup.js";
import { removePopUp, openPopUp, preventClick } from "./popUp.js";
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
popUpForm.addEventListener("click", preventClick);

addButton.addEventListener("click", openPopUp);

closeIcon.addEventListener("click", removePopUp);

popUp.addEventListener("click", removePopUp);

submitButton.addEventListener("click", popupValidation);

inputClient.addEventListener("click", removeClientBorder);

inputTitle.addEventListener("click", removeTitleBorder);

submitButton.addEventListener("click", submitPopUp);

// ----------------------------------------------------------------

// if (localStorage.getItem("storage")) {
//   const loadData = JSON.parse(localStorage.getItem("storage"));
//   loadData.forEach((element) => {
//     if (element.status == "doing")
//     insertHtmlCode(element.title, element.name, element.id, toDoList);
//     else insertHtmlCode(element.title, element.name, element.id, DoneList);
//   });
// }

// const arrayData = JSON.parse(localStorage.getItem("storage"));
// if (arrayData) {
//   arrayData.forEach((element) => {
//     if (element.status == "doing") {
//       let taskId = document.getElementById(`${element.id}`);
//       taskId.addEventListener("click", function (e) {
//         if (e.currentTarget == taskId) {
//           taskId.remove();
// insertHtmlCode(element.title, element.name, element.id, DoneList);
//           let updateArrayStatus = arrayData.find(function (obj) {
//             return obj.id == element.id;
//           });
//           let objIndex = arrayData.findIndex(function (obj) {
//             return obj.id == element.id;
//           });
//           updateArrayStatus.status = "done";
//           arrayData[objIndex] = updateArrayStatus;
//           localStorage.setItem("storage", JSON.stringify(arrayData));
//         }
//       });
//     }
//   });
// }
