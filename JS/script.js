import { Task } from "./Task.js";
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

// -------------------------------- load from localstorage--------------------------------

const popupValidation = function () {
  if (inputClient.value == "" || inputClient.value == null) {
    inputClient.classList.add("border");
    inputClient.classList.add("border-red-600");
  }
  if (inputTitle.value == "" || inputTitle.value == null) {
    inputTitle.classList.add("border");
    inputTitle.classList.add("border-red-600");
  }
};

const submitPopUp = function () {
  if (!localStorage.getItem("storage")) {
    localStorage.setItem("storage", JSON.stringify([]));
  }
  const task = new Task(
    inputTitle.value,
    inputClient.value,
    priorityOption.value,
    levelOfEffortOption.value,
    "doing"
  );

  insertHtmlCode(task.title, task.name, task.id, toDoList);

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

    const arrayData = JSON.parse(localStorage.getItem("storage"));
    arrayData.forEach((element) => {
      let taskId = document.getElementById(`${element.id}`);
      taskId.addEventListener("click", function (e) {
        if (e.currentTarget == taskId) {
          taskId.remove();
          insertHtmlCode(element.title, element.name, element.id, DoneList);
          let updateArrayStatus = arrayData.find(function (obj) {
            return obj.id == element.id;
          });
          let objIndex = arrayData.findIndex(function (obj) {
            return obj.id == element.id;
          });
          updateArrayStatus.status = "done";
          arrayData[objIndex] = updateArrayStatus;
          localStorage.setItem("storage", JSON.stringify(arrayData));
        }
      });
    });
  }
};

// ----------------------------------------------------------------

submitButton.addEventListener("click", popupValidation);

inputClient.addEventListener("click", function () {
  inputClient.classList.remove("border");
  inputClient.classList.remove("border-red-600");
});

inputTitle.addEventListener("click", function () {
  inputTitle.classList.remove("border");
  inputTitle.classList.remove("border-red-600");
});

submitButton.addEventListener("click", submitPopUp);

// ----------------------------------------------------------------

if (localStorage.getItem("storage")) {
  const loadData = JSON.parse(localStorage.getItem("storage"));
  loadData.forEach((element) => {
    if (element.status == "doing")
      insertHtmlCode(element.title, element.name, element.id, toDoList);
    else insertHtmlCode(element.title, element.name, element.id, DoneList);
  });
}

const arrayData = JSON.parse(localStorage.getItem("storage"));
if (arrayData) {
  arrayData.forEach((element) => {
    if (element.status == "doing") {
      let taskId = document.getElementById(`${element.id}`);
      taskId.addEventListener("click", function (e) {
        if (e.currentTarget == taskId) {
          taskId.remove();
          insertHtmlCode(element.title, element.name, element.id, DoneList);
          let updateArrayStatus = arrayData.find(function (obj) {
            return obj.id == element.id;
          });
          let objIndex = arrayData.findIndex(function (obj) {
            return obj.id == element.id;
          });
          updateArrayStatus.status = "done";
          arrayData[objIndex] = updateArrayStatus;
          localStorage.setItem("storage", JSON.stringify(arrayData));
        }
      });
    }
  });
}
