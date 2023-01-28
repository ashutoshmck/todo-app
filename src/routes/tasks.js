
const { TaskController } = require('../controller/task');
const Router = require('express').Router;
const router = Router();

router.route('/tasks')
  .get(TaskController.getTasks)
  .post(TaskController.createTask)
  .delete(TaskController.deleteCompletedTasks);
router.route('/tasks/:id')
  .get(TaskController.getTaskById)
  .put(TaskController.updateTaskById)
  .patch(TaskController.changeStatusOfTaskById);
module.exports = { router };
