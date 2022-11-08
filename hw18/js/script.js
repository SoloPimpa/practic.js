const TODO_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/";

const DELETE_BTN_CLASS = "delete-btn";
const ADD_BTN_CLASS = "add-ticket-btn";
const TEXTAREA_CLASS = "todo-item-input";

const addTodoTicketBtn = document.getElementById("add-ticket-btn");
const todoList = document.getElementById("todo-desk");
const todoItemTemplate = document.getElementById("todo-item-template").innerHTML;

addTodoTicketBtn.addEventListener("click", onAddTicketBtnClick);
todoList.addEventListener("click", onTodoListClick);
todoList.addEventListener("focusout", onTicketBlur, true);

let arrayTodoList = [];

init();

function onTicketBlur(e) {
    let ticketId = e.target.parentElement.dataset.id;
    switch (true) {
        case e.target.classList.contains(TEXTAREA_CLASS):
            let newDescription = e.target.value;
            updateTicket(ticketId, newDescription);
    }
}

function updateTicket(id, description) {
    let todoItem = findTodoItem(id);
    todoItem.description = description;
    updateTicketOnServer(todoItem);
}

function updateTicketOnServer(todoItem) {
    fetch(TODO_URL + todoItem.id, {
        method: "PUT",
        body: JSON.stringify(todoItem),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(getTodoList);
}

function findTodoItem(id) {
    return arrayTodoList.find((todoItem) => todoItem.id === id);
}

function onAddTicketBtnClick(e) {
    if (e.target.classList.contains(ADD_BTN_CLASS)) addTicket();
}

function onTodoListClick(e) {
    let ticketId = e.target.parentElement.dataset.id;
    switch (true) {
        case e.target.classList.contains(DELETE_BTN_CLASS):
            deleteTicket(ticketId);
    }
}

function init() {
    getTodoList().then(renderTodoList);
}

function deleteTicket(id) {
    fetch(TODO_URL + id, {
        method: "DELETE",
    }).then(getTodoList);
}

function addTicket() {
    const todoItem = {
        description: "",
    };
    addTicketOnServer(todoItem);
}

function addTicketOnServer(todoItem) {
    fetch(TODO_URL, {
        method: "POST",
        body: JSON.stringify(todoItem),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(getTodoList);
}

function getTodoList() {
    todoList.innerHTML = "";
    return fetch(TODO_URL)
        .then((res) => res.json())
        .then((data) => (arrayTodoList = data)).then(renderTodoList);

}

function renderTodoList() {
    arrayTodoList.forEach((todoItem) => renderTodoItem(todoItem));
    function renderTodoItem(todoItem) {
        const html = todoItemTemplate
            .replace("{{id}}", todoItem.id)
            .replace("{{description}}", todoItem.description);
        todoList.insertAdjacentHTML("beforeend", html);
    }
}