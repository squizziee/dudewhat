let listItems = document.querySelectorAll(".list_item")
let list = document.getElementById("list");
let prompt = document.getElementById("prompt");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");

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

    let text = document.createTextNode(prompt.value);

    textContainer.appendChild(text);
    square.appendChild(tick);
    checkboxContainer.appendChild(square);
    listItem.appendChild(checkboxContainer);
    listItem.appendChild(textContainer)
    list.appendChild(listItem);
    
    addListener(listItem);
    prompt.value = "";
})

removeBtn.addEventListener("click", function () {
    list.innerHTML = '';
})