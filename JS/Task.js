export class Task {
  constructor(title, name, priority, levelOfEffort, status, id) {
    this.title = title;
    this.name = name;
    this.priority = priority;
    this.levelOfEffort = levelOfEffort;
    this.status = "doing";
    this.id = Math.trunc(Math.random() * 1000000000000000);
  }

  doneTask() {
    this.status = "done";
  }
}
