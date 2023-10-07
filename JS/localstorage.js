import { insertHtmlCode } from "./insertHtml.js";
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

export const addTolocalStorage = function (data) {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", "[]");
  }
  const reciveData = JSON.parse(localStorage.getItem("data"));
  reciveData.push(data);
  localStorage.setItem("data", JSON.stringify(reciveData));
};

export const updateTolocalStorage = function (data) {
  localStorage.setItem("data", JSON.stringify(data));
};

export const loadlocalstorage = function () {
  if (localStorage.getItem("data")) {
    const reciveData = JSON.parse(localStorage.getItem("data"));
    reciveData.forEach((element) => {
      if (element.status === "doing")
        insertHtmlCode(element.title, element.name, toDoList, element.id);
      else insertHtmlCode(element.title, element.name, DoneList, element.id);
    });
  }
};
