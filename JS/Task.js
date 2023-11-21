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
export class Task {
  constructor(title, name, priority, levelOfEffort, status, id) {
    this.title = title;
    this.name = name;
    this.priority = priority;
    this.levelOfEffort = levelOfEffort;
    this.status = "doing";
    this.id = Math.trunc(Math.random() * 1000000000000000);
  }

  changestatus() {
    document.getElementById(`${this.id}`).addEventListener("click", (e) => {
      const reciveData = JSON.parse(localStorage.getItem("data"));
      if (this.status != "done") {
        document.getElementById(`${this.id}`).remove();
        if ((e.currentTarget.id = this.id)) {
          this.status = "done";
          const argumentIndex = reciveData.findIndex(({ id }) => id == this.id);
          reciveData.splice(argumentIndex, 1, this);
          console.log(reciveData);
          insertHtmlCode(this.title, this.name, DoneList, this.id);
          updateTolocalStorage(reciveData);
        }
      }
    });
  }
}
