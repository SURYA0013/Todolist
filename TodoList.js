let formTaskEl = document.getElementById("form-task");
let input_element = document.getElementById("todo-input");
let taskList = localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")): [];

formTaskEl.addEventListener("submit", function (e) {
  // console.log("working");
  e.preventDefault();
  let task = input_element.value.trim();
  console.log(task)
  console.log(taskList);
  taskList.push(task);
  localStorage.setItem("task", JSON.stringify(taskList));
  input_element.value='';
  displayTask();
});
// display tasks
function displayTask() {
  let distask = "";
  taskList.forEach(function (val, i) {
    distask =
      distask +
      `<li class="list-group-item list-group-item-secondary mb-2" >
                <span>${val}</span>
                <i class="bi bi-trash3-fill float-end" onclick="deleteItem(${i})"></i>
                <i class="bi bi-pencil-square float-end me-4" onclick="update(${i})" ></i>
              </li>
             `;
  });
  document.getElementById("display-task").innerHTML = distask;
}
displayTask();

// delete task

function deleteItem(index){  
  taskList.splice(index,1);
  localStorage.setItem('task',JSON.stringify(taskList));
  displayTask();
}
// updating task
function update(index){
  input_element.value=taskList[index];
  taskList.splice(index,1);
  localStorage.setItem('task',JSON.stringify(taskList));
  displayTask();
}
