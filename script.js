const input = document.getElementById("inpt");
const button = document.querySelector("#push");
const showItem = document.querySelector("#tasks");

const addItemAfterClick = () => {
  if (input.value.length > 0) {
    showItem.innerHTML += `
        <div class="task" >
            <span id="taskname"> ${input.value}</span>
            <button class=delete btn btn-damger>Delete</button>
            
        </div>
         

    `;
    input.value = "";
    const current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  } else {
    alert("Input the Task");
  }
};

button.addEventListener("click", addItemAfterClick);
