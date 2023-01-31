const db = require('../../database/models');

class TaskServices {
  static async createTask(name) {

    const task = await db.Task.create({ name: name, isCompleted: false });
    return task;
  }

  static async getTasks() {
    const tasks = await db.Task.findAll();
    return tasks;
  }

  static async getTaskById({ id }) {
    const task = await db.Task.findOne({ where: { id: Number(id) } });
    return task;
  }

  static async updateTaskById(id, _task) {
    const task = await db.Task.update(_task, { where: { id: Number(id) } });
    return task;
  }

  static async changeStatusOfTaskById(id) {
    const task = await db.Task.update({ isCompleted: true }, { where: { id: Number(id) } });
    return task;
  }

  static async deleteCompletedTasks() {
    const task = await db.Task.destroy({ where: { isCompleted: true } });
    return task;
  }

}
module.exports = { TaskServices };