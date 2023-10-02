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

export const changestatus = function () {
  if (localStorage.getItem("data")) {
    const reciveData = JSON.parse(localStorage.getItem("data"));
    reciveData.forEach((element) => {
      document
        .getElementById(`${element.id}`)
        .addEventListener("click", showInDoneColumn());
    });
  }
};

const showInDoneColumn = function (item, e) {
  if (item) {
    if (e.currenttarget == document.getElementById(`${item.id}`)) {
      item.remove();
      insertHtmlCode(item.title, item.name, DoneList, item.id);
    }
  }
};
