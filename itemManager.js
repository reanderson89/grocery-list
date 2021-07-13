
// takes in the item properties and sets them on the html below to be added as a value to the newListItem and then pushed into the itemsHtmlList array (see addItemsToList)
const createGroceryListItem = (id, itemName, crossedOff) => 
    `<div class=row>
    <div class=col-6>
        <li ${crossedOff ? "class='crossedOff'" : ""}>${itemName}</li>
    </div>
    <div class=col>
        ${crossedOff ? "" :'<button class="btn btn-secondary btn-sm crossOffBtn" type="button" data-id='+ id + '>Cross Off</button>'}
    </div>
    <div class=col>
        <button class="btn btn-primary btn-sm deleteBtn" type="button" data-id=${id}>Remove</button>
    </div>
</div>`;

class ItemManager {
    constructor(currentId = 0){
    this.currentId = currentId;
    this.itemsArray = [];
    }

    // adds item to this.itemsArray
    addItemToItemsArray(itemName){
        let item = {
            id: this.currentId++,
            itemName: itemName,
            crossedOff: false,
        }
        this.itemsArray.push(item);
    }

    // renders this.itemsArray, makes it display dynamically on the page
    addItemsToList(){
        const itemsHtmlList = [];
        for (let i = 0; i < this.itemsArray.length; i++){
            const item = this.itemsArray[i];
            const newListItem = createGroceryListItem(item.id, item.itemName, item.crossedOff);
            itemsHtmlList.push(newListItem);
        }
        const joinItemsHtmlList = itemsHtmlList.join('\n');

        groceryList.innerHTML = joinItemsHtmlList;
    }

    // adds this.itemsArray and this.currentId to local storage after converting it
    setInLocalStorage(){
        let itemsArrayJson = JSON.stringify(this.itemsArray);
        localStorage.setItem("items", itemsArrayJson);
        let currentId = String(this.currentId);
        localStorage.setItem("currentId", currentId);
    }

    // loads local storage, sets this.itemsArray and this.currentId equal to what is in local storage
    loadLocalStorage(){
       if(localStorage.getItem("items")){
           let itemsArrayJson = localStorage.getItem("items");
           console.log(itemsArrayJson)
           console.log(JSON.parse(itemsArrayJson))
           this.itemsArray = JSON.parse(itemsArrayJson);
       }
       if(localStorage.getItem("currentId")){
           let currentIdString = localStorage.getItem("currentId");
           this.currentId = Number(currentIdString);
       }

    }

    // removes item from this.itemsArray
    deleteItem(id){
        let itemsToKeep = this.itemsArray.filter(item => item.id != id);
        console.log(itemsToKeep);
        this.itemsArray = itemsToKeep;
    }


    // changes status to true for crossedOff
    crossOff(id){
        let changedList = [];
        for (let i = 0; i < this.itemsArray.length; i++){
            let currentItem = this.itemsArray[i];

            if (currentItem.id == id){
                currentItem.crossedOff = true;
                changedList.push(currentItem)
            } else {
                changedList.push(currentItem)
            }
            ;
        };
    }
}



