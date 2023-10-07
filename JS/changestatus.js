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

export const changestatus = () => {
  if (localStorage.getItem("data")) {
    const reciveData = JSON.parse(localStorage.getItem("data"));
    reciveData.forEach((element, i) => {
      document.getElementById(`${element.id}`).addEventListener("click", () => {
        showInDoneColumn(element, i);
      });
    });
  }
};

const showInDoneColumn = (e, i) => {
  const reciveData = JSON.parse(localStorage.getItem("data"));
  if (reciveData[i].status != "done") {
    console.log(e.id);
    document.getElementById(`${e.id}`).remove();
    reciveData[i].status = "done";
    insertHtmlCode(
      reciveData[i].title,
      reciveData[i].name,
      DoneList,
      reciveData[i].id
    );
    updateTolocalStorage(reciveData);
  }

  // console.log(document.getElementById(`${reciveData[i]}.id`));
};
