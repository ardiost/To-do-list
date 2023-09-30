export class Task {
  constructor(title, name, priority, levelOfEffort, column, status, id) {
    this.title = title;
    this.name = name;
    this.priority = priority;
    this.levelOfEffort = levelOfEffort;
    this.column = column;
    this.status = "doing";
    this.id = Math.trunc(Math.random() * 1000000000000000);
  }
}
