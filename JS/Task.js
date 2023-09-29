export class Task {
  constructor(title, client, priority, levelOfEffort, status, id) {
    this.title = title;
    this.name = client;
    this.priority = priority;
    this.levelOfEffort = levelOfEffort;
    this.status = status;
    this.id = Math.trunc(Math.random() * 1000000000000000);
  }
}
