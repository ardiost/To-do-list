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
    reciveData.forEach((element) => {
      document
        .getElementById(`${element.id}`)
        .addEventListener("click", showInDoneColumn);
    });
  }
};

const showInDoneColumn = function () {
  const reciveData = JSON.parse(localStorage.getItem("data"));
  console.log(
    reciveData.find((e) => {
      console.log(this);
    })
  );
};
