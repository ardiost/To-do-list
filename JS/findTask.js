import { Task } from "./Task.js";
export const findTask = function () {
  const reciveData = JSON.parse(localStorage.getItem("data"));
  const task = document.querySelectorAll(".task");
  Array.from(task).forEach((element) => {
    element.addEventListener("click", (e) => {
      const taskOBJ = reciveData.find(({ id }) => id == e.currentTarget.id);
      taskOBJ.changestatus();
    });
  });
};
