
let TASKS = [];
const createTask = (
  { name }
) => {
  const task = {
    id: (TASKS.length + 1).toString(),
    name: name,
    isComplete: false
  };

  TASKS.push(task);
  return JSON.stringify(task);
};
const getTasks = () => {
  return JSON.stringify(TASKS);
};
const getTaskById = ({ id }) => {
  return JSON.stringify(TASKS.find(element => element.id === String(id)));
};
const updateTaskById = (id, task) => {
  TASKS[TASKS.indexOf(TASKS.find(element => element.id === String(id)))] = task;
  return (
    JSON.stringify(TASKS.find(element => element.id === id)));
};
const changeStatusOfTaskById = ({ id }) => {
  TASKS[TASKS.indexOf(TASKS.find(element => element.id === String(id)))].isComplete = true;
  return JSON.stringify(TASKS[TASKS.indexOf(TASKS.find(element => element.id === String(id)))]);
};
const deleteCompletedTasks = () => {
  TASKS = TASKS.filter(element => element.isComplete == false);
  return (
    JSON.stringify(TASKS));
};
module.exports = { createTask, getTasks, getTaskById, updateTaskById, changeStatusOfTaskById, deleteCompletedTasks };