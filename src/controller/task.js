const { TaskServices } = require('../services/task');

class TaskController {
  static createTask = (
    request, response
  ) => {
    let task = TaskServices.createTask(request.body.name);
    return response.status(201).json({ status: 201, data: task, message: 'Succesfully Task Created' });

  };
  static getTasks(request, response) {
    let tasks = TaskServices.getTasks();
    return response.status(200).json({ status: 200, data: tasks, message: 'Succesfully Tasks Retrieved' });
  }
  static getTaskById = (request, response) => {
    let task = TaskServices.getTaskById(request.params);
    return response.status(200).json({ status: 200, data: task, message: 'Succesfully Task Retrieved' });
  };
  static updateTaskById = (request, response) => {
    let task = TaskServices.updateTaskById(request.params.id, request.body);
    return response.status(200).json({ status: 200, data: task, message: 'Succesfully Task Updated' });
  };
  static changeStatusOfTaskById = (request, response) => {
    let task = TaskServices.changeStatusOfTaskById(request.params.id);
    return response.status(200).json({ status: 200, data: task, message: 'Succesfully Task Updated' });
  };
  static deleteCompletedTasks = (request, response) => {
    let tasks = TaskServices.deleteCompletedTasks();
    return response.status(200).json({ status: 200, data: tasks, message: 'Succesfully deleted completed tasks' });
  };
}


module.exports = { TaskController };