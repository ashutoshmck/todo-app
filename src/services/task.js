const Tasks = require('../../database/models').Task;

class TaskServices {
  static createTask = async (name) => {

    const task = await Tasks.create({ name: name, isCompleted: false });
    return task;
  };

  static getTasks = async () => {
    const tasks = await Tasks.findAll();
    return tasks;
  };

  static getTaskById = async ({ id }) => {
    const task = await Tasks.findOne({ where: { id: Number(id) } });
    return task;
  };

  static updateTaskById = async (id, _task) => {
    const task = await Tasks.update(_task, { where: { id: Number(id) } });
    return task;
  };

  static changeStatusOfTaskById = async (id) => {
    const task = await Tasks.update({ isCompleted: true }, { where: { id: Number(id) } });
    return task;
  };

  static deleteCompletedTasks = async () => {
    const task = await Tasks.destroy({ where: { isCompleted: true } });
    return task;
  };

}
module.exports = { TaskServices };