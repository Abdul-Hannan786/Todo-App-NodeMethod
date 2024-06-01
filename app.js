let todoInput = document.querySelectorAll('.todo-input')[0];
let todoListDiv = document.querySelectorAll('.todo-list')[0];

function add() {
    let newTodo = todoInput.value;
    printAllTodos(newTodo);
    todoInput.value = "";
}


function printAllTodos(todoText) {
    let newTodoItem = makeTodoEl(todoText)
    todoListDiv.appendChild(newTodoItem)
}

function makeTodoEl(newTodoText) {
        let pEl = document.createElement("P")
        let textNode = document.createTextNode(newTodoText)
        pEl.appendChild(textNode)


        let dltBtn = document.createElement("BUTTON")
        let dltText = document.createTextNode("Delete")
        dltBtn.setAttribute("onclick", "deleteTodo(this)")
        dltBtn.appendChild(dltText)

        let editBtn = document.createElement("BUTTON")
        let editText = document.createTextNode("Edit")
        editBtn.setAttribute("onclick", "editTodo(this)")
        editBtn.appendChild(editText)

        let space1 = document.createTextNode(" ")
        pEl.appendChild(space1)
        pEl.appendChild(dltBtn)

        let space2 = document.createTextNode(" ")
        pEl.appendChild(space2)
        pEl.appendChild(editBtn)

        return pEl
    }


function deleteTodo(el) {
    let targetNode = el.parentNode
    todoListDiv.removeChild(targetNode)
}


let todoInputContainer = document.querySelectorAll("#add-todo-container")[0];
let editTodoContainer = document.querySelectorAll("#edit-todo-container")[0];
let editForm = document.querySelectorAll(".edit-todo-input")[0];
let editValue;

function editTodo(el) {
    if (isediting) {
        displayErrMsg()
    }
    else {
        editValue = el.parentNode.childNodes[0]
        editForm.value = editValue.nodeValue
        toggleTodoInput()
    }
}

function updateTodo() {
    editValue.nodeValue = editForm.value
    toggleTodoInput()
}

let isediting = false
function toggleTodoInput() {
    if (isediting) {
        todoInputContainer.className = "";
        editTodoContainer.className += " hide";
    }
    else {
        todoInputContainer.className += " hide";
        editTodoContainer.className = "";
    }

    isediting = !isediting
}

let errorMsg = document.querySelectorAll(".error-msg")[0]
function displayErrMsg() {
    errorMsg.innerHTML = 'Please save current todo first.';
    setTimeout(function () {
        errorMsg.innerHTML = "";
    }, 3000)
}

