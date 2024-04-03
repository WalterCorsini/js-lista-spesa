// INPUT
// array
const shoppingList = ["caffe", "pane", "latte", "giornale"];

// declaration variable
let shoppingListElem = document.querySelector(".shopping-list");
let i = 0                                           // declariation increment variable
let shoppingItem ="";



// 1)  FIRST METHOD

// LOGIC AND OUTPUT
// while (i < shoppingList.length) {                   // condition
//     const shoppingItem = shoppingList[i];           // save shoppingList element inside of variable
//     const listElem = document.createElement("li");  // create element "li" and sava inside of variable
//     listElem.innerHTML = shoppingItem;              // add item inside of element
//     shoppingListElem.append(listElem);              // element inserted inside to the DOM
//     i++;                                            // increment variable
// }


// 2) SECOND METHOD
while(i < shoppingList.length){                         // condition
    shoppingItem +="<li>" + shoppingList[i] + "</li>";  // save shoppingList element inside of variable
    i++;                                                // increment variable
}

// OUTPUT
shoppingListElem.innerHTML = shoppingItem;              // show inside of browser shopping list