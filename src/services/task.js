
let TASKS = [];
class TaskServices {
  static createTask(name) {
    const task = {
      id: (TASKS.length + 1).toString(),
      name: name,
      isComplete: false
    };

    TASKS.push(task);
    return task;
  }
  static getTasks() {
    return TASKS;
  }
  static getTaskById({ id }) {
    return TASKS.find(element => element.id === String(id));
  }
  static updateTaskById(id, task) {
    TASKS[TASKS.indexOf(TASKS.find(element => element.id === String(id)))] = task;
    return TASKS.find(element => element.id === id);
  }
  static changeStatusOfTaskById(id) {
    TASKS[TASKS.indexOf(TASKS.find(element => element.id === String(id)))].isComplete = true;
    return TASKS[TASKS.indexOf(TASKS.find(element => element.id === String(id)))];
  }
  static deleteCompletedTasks() {
    TASKS = TASKS.filter(element => element.isComplete == false);
    return TASKS;
  }

}
module.exports = { TaskServices };