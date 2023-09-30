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

import { Task } from "./Task.js";

export const submitPopUp = function () {
  const task = new Task(
    inputTitle.value,
    inputClient.value,
    priorityOption.value,
    levelOfEffortOption.value,
    "doing"
  );

  insertHtmlCode(task.title, task.name, task.column, task.id);

  if (
    !inputTitle.classList.contains("border") &&
    !inputClient.classList.contains("border")
  ) {
    const data = JSON.parse(localStorage.getItem("storage"));
    data.push(task);
    localStorage.setItem("storage", JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("storage")));
    inputTitle.value = "";
    inputClient.value = "";
    levelOfEffortOption.value = "Easy";
    priorityOption.value = "High";
    popUp.classList.add("hidden");
  }
};
