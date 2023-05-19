const prompt = require('prompt-sync')();
const tasks = [];



function Task(description, dueDate, priority) {
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = false;
}


function displayTasks() {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}) ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority}, Completed: ${task.completed ? 'Yes' : 'No'})`);
  });
  console.log();
}


function markTaskAsCompleted() {
  displayTasks();
  const taskNumber = parseInt(prompt('Enter the number of the task to mark as completed: '));

  if (taskNumber >= 1 && taskNumber <= tasks.length) {
    tasks[taskNumber - 1].completed = true;
    console.log('Task marked as completed!');
  } else {
    console.log('Invalid task number.');
  }

  showMain();
}



function deleteTask() {
  displayTasks();
  const taskNumber = parseInt(prompt('Enter the number of the task to delete: '));

  if (taskNumber >= 1 && taskNumber <= tasks.length) {
    tasks.splice(taskNumber - 1, 1);
    console.log('Task deleted successfully!');
  } else {
    console.log('Invalid task number.');
  }

  showMain();
}

function addTask() {
  console.log('Enter task details:');
  const description = prompt('Description: ');
  const dueDate = prompt('Due Date: ');
  const priority = prompt('Priority: ');

  const task = new Task(description, dueDate, priority);
  tasks.push(task);
  console.log('Task added successfully!');
  showMain();
}



function clearTasks() {
  tasks.length = 0;
  console.log('All tasks cleared!');
  showMain();
}

function sortTasksByDueDate() {
  tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  console.log('Tasks sorted by due date!');
  showMain();
}

function sortTasksByPriority() {
  tasks.sort((a, b) => a.priority - b.priority);
  console.log('Tasks sorted by priority!');
  showMain();
}

function filterTasksByCompleted() {
  const completedTasks = tasks.filter((task) => task.completed);
  console.log('Completed Tasks:');
  completedTasks.forEach((task, index) => {
    console.log(`${index + 1}) ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority})`);
  });
  showMain();
}

function handleChoice(choice) {
  switch (choice) {
    case '1':
      addTask();
      break;

    case '2':
      displayTasks();
      showMain();
      break;

    case '3':
      filterTasksByCompleted();
      break;

    case '4':
      markTaskAsCompleted();
      break;

    case '5':
      deleteTask();
      break;

    case '6':
      sortTasksByDueDate();
      break;

    case '7':
      sortTasksByPriority();
      break;

    case '8':
      clearTasks();
      break;

    default:
      console.log('Invalid choice.');
      showMain();
  }
}

// Function to prompt user for choice
function showMain() {
  console.log('***************************');
  console.log('Welcome to JS TODO-APP');
  console.log('***************************');
  console.log('Select an action:');
  console.log('1) Add a new task');
  console.log('2) List all tasks');
  console.log('3) List completed tasks');
  console.log('4) Mark the task as done');
  console.log('5) Delete a task');
  console.log('6) Sort tasks by the due date');
  console.log('7) Sort tasks by priority');
  console.log('8) Clear all tasks');
  console.log('***************************');

  const choice = prompt('What\'s your choice? ');
  handleChoice(choice);
}

showMain();
