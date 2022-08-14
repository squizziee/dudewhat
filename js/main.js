let listItems = document.querySelectorAll(".list_item")

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        listItems[i].classList.add("list_item_crossed");
    })
}