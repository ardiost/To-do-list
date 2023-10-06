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

import { insertHtmlCode } from "./insertHtml.js";

import { updateTolocalStorage } from "./localstorage.js";

export const changestatus = function () {
  if (localStorage.getItem("data")) {
    const reciveData = JSON.parse(localStorage.getItem("data"));
    reciveData.forEach((element, i) => {
      document
        .getElementById(`${element.id}`)
        .addEventListener("click", showInDoneColumn(element, i));
    });
  }
};

const showInDoneColumn = function (element, i) {
  const reciveData = JSON.parse(localStorage.getItem("data"));
  console.log(element.id);
  // console.log(document.getElementById(`${reciveData[i]}.id`));
};
