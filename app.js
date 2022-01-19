//selectors
let todoInput= document.querySelector(".todo-input")
let todoButton = document.querySelector(".todo-button")
let todoList = document.querySelector(".todolist")
let filterOpt = document.getElementById("filter-todo")
//Event Listeners
todoButton.addEventListener("click",addTodo)
todoList.addEventListener("click", deleteCheck)

//function
function addTodo() { 
    let tododiv= document.createElement("div")
    tododiv.classList.add("todo")
    let newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    tododiv.appendChild(newTodo);

    let completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-but")
    tododiv.appendChild(completedButton)

    let trashbutton = document.createElement('button')
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>'
    trashbutton.classList.add("trash-but")
    tododiv.appendChild(trashbutton)

    todoList.appendChild(tododiv)
    //clear input
    todoInput.value=""
}
function deleteCheck(event){
    let item = event.target
    if (item.classList[0] == "trash-but"){
        let todo = item.parentElement
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    if (item.classList[0] == "complete-but"){
        let todo = item.parentElement
        todo.classList.toggle("completed")
    }
}
filterOpt.onchange = function(){
    let todos = document.querySelectorAll(".todo");
    let filterresult = this.value
    todos.forEach(function(element){
        switch (filterresult){
            case "all": element.style.display = "flex"; break;
            case "completed": if (element.classList.contains("completed")){
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }; break;
            case "uncompleted": if (element.classList.contains("completed")){
                element.style.display = "none";
            } else {
                element.style.display = "flex";
            }; break;
        }
    })
}
