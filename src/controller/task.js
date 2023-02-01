const { TaskServices } = require('../ services / task');

class TaskController {
  static createTask = async (
    request, response
  ) => {
    let task = await TaskServices.createTask(request.body.name);
    return response.status(201).json({ status: 201, data: task, message: `Succesfully  Created ${request.body.name} task` });
  };

  static getTasks = async (request, response) => {
    let tasks = await TaskServices.getTasks();
    return response.status(200).json({ status: 200, data: tasks, message: 'Succesfully Tasks Retrieved' });
  };

  static getTaskById = async (request, response) => {
    let task = await TaskServices.getTaskById(request.params);
    return response.status(200).json({ status: 200, data: task, message: 'Succesfully Task Retrieved' });
  };

  static updateTaskById = async (request, response) => {
    let task = await TaskServices.updateTaskById(request.params.id, request.body);
    return response.status(200).json({ status: 200, data: task, message: 'Succesfully Task Updated' });
  };

  static changeStatusOfTaskById = async (request, response) => {
    let task = await TaskServices.changeStatusOfTaskById(request.params.id);
    return response.status(200).json({ status: 200, data: task, message: 'Succesfully Task Updated' });
  };

  static deleteCompletedTasks = async (request, response) => {
    let tasks = await TaskServices.deleteCompletedTasks();
    return response.status(200).json({ status: 200, data: tasks, message: 'Succesfully deleted completed tasks' });
  };
}


module.exports = { TaskController };