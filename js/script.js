// INPUT
// array
const shoppingList = ["caffe", "pane", "latte", "giornale"];

// declaration variable
let shoppingListElem = document.querySelector(".shopping-list");
let i = 0                                           // declariation increment variable

// LOGIC AND OUTPUT
while (i < shoppingList.length) {                   // condition
    const shoppingItem = shoppingList[i];           // save shoppingList element inside of varaible
    const listElem = document.createElement("li");  // create element "li" and sava inside of variable
    listElem.innerHTML = shoppingItem;              // add item inside of element
    shoppingListElem.append(listElem);              // element inserted inside to the DOM
    i++;                                            // increment variable
}
