const groceryItem = document.getElementById("groceryItem");
const addItem = document.getElementById("addItem");
const groceryList = document.getElementById("groceryList");
const deleteBtn = document.getElementsByClassName("deleteBtn");
let itemManager = new ItemManager();
itemManager.loadLocalStorage();
itemManager.addItemsToList();


// event listeners

// adds item from input to list and local storage
addItem.addEventListener('click', function(event){
    event.preventDefault()
    itemManager.addItemToItemsArray(groceryItem.value);
    itemManager.addItemsToList();
    itemManager.setInLocalStorage();
    groceryItem.value = "";
});


//  removes item from itemsArray and or changes crossedOff status of item
groceryList.addEventListener("click", function(event){
    const deleteBtn = document.getElementsByClassName("deleteBtn");
    const crossOffBtn = document.getElementsByClassName("crossOffBtn");
    console.log(event.target);
    let element = event.target;
    let buttonClasses = element.classList;
    let id = element.getAttribute("data-id");
    if(buttonClasses.value.includes("deleteBtn")){
        itemManager.deleteItem(id);
        itemManager.setInLocalStorage();
        itemManager.addItemsToList();
    } else if (buttonClasses.value.includes("crossOffBtn")){
        itemManager.crossOff(id);
        itemManager.setInLocalStorage();
        itemManager.addItemsToList();
    }

})