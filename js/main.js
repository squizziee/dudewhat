let listItems = document.querySelectorAll(".list_item")
let list = document.getElementById("list");
let prompt = document.getElementById("prompt");
let addBtn = document.getElementById("addBtn");
let removeAllBtn = document.getElementById("removeAllBtn");

function addListener(obj) {
    obj.addEventListener("click", function() {
        if (!obj.classList.contains("list_item_crossed"))
            obj.classList.add("list_item_crossed");
        else
            obj.classList.remove("list_item_crossed");
    })
}
//temprorary
for (let i = 0; i < listItems.length; i++) {
    let obj = listItems[i];
    obj.addEventListener("click", function() {
        if (!obj.classList.contains("list_item_crossed"))
            listItems[i].classList.add("list_item_crossed");
        else
            obj.classList.remove("list_item_crossed");
    })
}
function addDeletionListener(element) {
    element.addEventListener("click", function() {
        element.parentNode.remove();
    })
}

addBtn.addEventListener("click", function() {
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

    let text = document.createTextNode(prompt.value);

    textContainer.appendChild(text);
    square.appendChild(tick);
    checkboxContainer.appendChild(square);
    listItem.appendChild(checkboxContainer);
    listItem.appendChild(textContainer)
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    list.appendChild(listItem);
    
    addListener(listItem);
    prompt.value = "";
})

removeAllBtn.addEventListener("click", function () {
    list.innerHTML = '';
})