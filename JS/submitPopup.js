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

// import { changestatus } from "./changestatus.js";

import { insertHtmlCode } from "./insertHtml.js";

import { Task } from "./Task.js";

import { resetPopUp } from "./popUp.js";

import { addTolocalStorage } from "./localstorage.js";

export const submitPopUp = function () {
  if (
    !inputTitle.classList.contains("border") &&
    !inputClient.classList.contains("border")
  ) {
    const task = new Task(
      inputTitle.value,
      inputClient.value,
      priorityOption.value,
      levelOfEffortOption.value,
      "doing"
    );

    insertHtmlCode(task.title, task.name, toDoList, task.id);
    task.changestatus();
    addTolocalStorage({ ...task });
    resetPopUp();
    // changestatus();
  }
};
