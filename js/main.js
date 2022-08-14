let listItems = document.querySelectorAll(".list_item")

for (let i = 0; i < listItems.length; i++) {
    let obj = listItems[i];
    obj.addEventListener("click", function() {
        if (!obj.classList.contains("list_item_crossed"))
            listItems[i].classList.add("list_item_crossed");
        else
            obj.classList.remove("list_item_crossed");
    })
}

let list = document.getElementById("list");
let prompt = document.getElementById("prompt");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function() {
    let listItem = document.createElement("div");
    listItem.classList.add("list_item");

    const node = document.createTextNode("- " + prompt.value);

    listItem.appendChild(node);
    list.appendChild(listItem);

    prompt.value = "";
})

removeBtn.addEventListener("click", function () {
    list.innerHTML = '';
})