let listItems = document.querySelectorAll(".list_item")
let list = document.getElementById("list");
let prompt = document.getElementById("prompt");
let addBtn = document.getElementById("addBtn");
let removeAllBtn = document.getElementById("removeAllBtn");

function construct() {
    let listItem = document.createElement("div");
    listItem.classList.add("list_item");

    let checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox_container");

    let textContainer = document.createElement("div");
    textContainer.classList.add("text_container");

    let square = document.createElement("div");
    square.classList.add("square");

    let tick = document.createElement("i");
    tick.classList.add("fa-solid");
    tick.classList.add("fa-xmark");

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete_btn")

    let deleteBtnIcon = document.createElement("i");
    deleteBtnIcon.classList.add("fa-solid");
    deleteBtnIcon.classList.add("fa-trash-can");

    deleteBtn.appendChild(deleteBtnIcon);
    addDeletionListener(deleteBtn)

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit_btn");

    let editBtnIcon = document.createElement("i");
    editBtnIcon.classList.add("fa-solid");
    editBtnIcon.classList.add("fa-pen-to-square");

    editBtn.appendChild(editBtnIcon);
    addEditListener(editBtn);

    let text = document.createTextNode(prompt.value);

    textContainer.appendChild(text);
    square.appendChild(tick);
    checkboxContainer.appendChild(square);
    addListener(checkboxContainer);
    listItem.appendChild(checkboxContainer);
    listItem.appendChild(textContainer)
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    list.appendChild(listItem);
    
    prompt.value = "";
}

addBtn.addEventListener("click", construct)

function addListener(obj) {
    obj.addEventListener("click", function() {
        if (!obj.parentNode.classList.contains("list_item_crossed"))
            obj.parentNode.classList.add("list_item_crossed");
        else
            obj.parentNode.classList.remove("list_item_crossed");
    })
}

function addDeletionListener(element) {
    element.addEventListener("click", function() {
        element.parentNode.remove();
    })
}

function transmitChanges(element) {
    element.currentTarget.myParam.parentNode.getElementsByClassName("text_container")[0].innerHTML = prompt.value;
    element.currentTarget.myParam = undefined;
    prompt.value = "";
    addBtn.removeEventListener("click", transmitChanges);
    addBtn.addEventListener("click", construct);
}

function addEditListener(element) {
    element.addEventListener("click", function() {
        prompt.value = element.parentNode.getElementsByClassName("text_container")[0].innerHTML;
        addBtn.removeEventListener("click", construct);
        addBtn.myParam = element;
        addBtn.addEventListener("click", transmitChanges)
    })
}

removeAllBtn.addEventListener("click", function () {
    list.innerHTML = '';
})