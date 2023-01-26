
const { createTask, getTasks, getTaskById, updateTaskById, changeStatusOfTaskById, deleteCompletedTasks } = require('./task');
const Router = require('express').Router;
const router = Router();

router.route('/tasks')
  .get((request, response) => { response.send(getTasks()); })
  .post((request, response) => { response.send(createTask(request.body)); })
  .delete((request, response) => { response.send(deleteCompletedTasks()); });
router.route('/tasks/:id')
  .get((request, response) => { response.send(getTaskById(request.params)); })
  .put((request, response) => { response.send(updateTaskById(request.params.id, request.body)); })
  .patch((request, response) => { response.send(changeStatusOfTaskById(request.params)); });
module.exports = { router };
