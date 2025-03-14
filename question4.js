let tasks = [];
let nextId = 1;

function addTask(name, description) {
  const newTask = {
    id: nextId++, 
    name: name,
    description: description
  };
  tasks.push(newTask);
  return newTask;
}


function viewAllTasks() {
  if (tasks.length === 0) {
    return "No tasks available.";
  }
  return tasks.map(task => `ID: ${task.id} | Name: ${task.name} | Description: ${task.description}`).join('\n');
}


function updateTask(id, updatedFields) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return null;
  }
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...updatedFields,
    id: tasks[taskIndex].id 
  };
  return tasks[taskIndex];
}


function deleteTask(id) {
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);
  return tasks.length < initialLength;
}


function runCRUDDemo() {
  console.log("--- Adding Tasks ---");
  addTask("Learn JavaScript", "Understand the basics of JavaScript.");
  addTask("Groceries", "Buying Frozen foods, fruits, and vegetables.");
  console.log(viewAllTasks());

  console.log("\n--- Updating Task 2 ---");
  updateTask(1, { name: "gym", description: "Working on abs." });
  console.log(viewAllTasks());

  console.log("\n--- Deleting Task 1 ---");
  deleteTask(1);
  console.log(viewAllTasks());
}

runCRUDDemo();
