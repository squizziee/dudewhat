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
    addCrossListener(checkboxContainer);
    listItem.appendChild(checkboxContainer);
    listItem.appendChild(textContainer)
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    list.appendChild(listItem);
    
    clearPrompt();
}

function clearPrompt() {
    prompt.value = "";
}

addBtn.addEventListener("click", construct)

removeAllBtn.addEventListener("click", function () {
    list.innerHTML = '';
})

function addCrossListener(checkbox) {
    checkbox.addEventListener("click", function() {
        if (!checkbox.parentNode.classList.contains("list_item_crossed"))
            checkbox.parentNode.classList.add("list_item_crossed");
        else
            checkbox.parentNode.classList.remove("list_item_crossed");
    })
}

function addDeletionListener(btn) {
    btn.addEventListener("click", function() {
        btn.parentNode.remove();
    })
}

function transmitChanges(element) {
    element.currentTarget.targetBtn.parentNode.querySelector(".text_container").innerHTML = prompt.value;
    element.currentTarget.targetBtn = undefined;
    addBtn.removeEventListener("click", transmitChanges);
    addBtn.addEventListener("click", construct);
    clearPrompt();
}

function addEditListener(element) {
    element.addEventListener("click", function() {
        prompt.value = element.parentNode.querySelector(".text_container").innerHTML;
        addBtn.removeEventListener("click", construct);
        addBtn.targetBtn = element;
        addBtn.addEventListener("click", transmitChanges)
    })
}