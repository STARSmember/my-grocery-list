
// import PeaDB provided by the Video. the skypack does not load PeaDB page.
import {LocalDB} from 'http://cdn.skypack.dev/peadb'

// import Short ID package. It does not show up on website
import shortid from 'https://cdn.skypack.dev/shortid'

// link both the "import peadb" with 'const groceries' array
// by creating a const.
   const db = new LocalDB('grocery-list-db')   // const is linked to groceries array <----- IMPORTANT


// create an array to hold the list of items you have created. 
// here is the array show at the bottom...
// const groceries = ['Milk', 'Cookie', 'Orange Juice']   // <---- array created. <---- OLD array
// array above this line of code.

// create a const array like the one above but CONST.
// const groceries = [] // <-- new Array.
   const groceries = db.getAll() || [] // <--- NEW, new array
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// Create an element value/valuse 
const GroceryList = document.getElementById('GroceryList')

// add element for newGrocery
const newGroceryInput = document.getElementById('newGrocery')

// add Button element ID.
const addBtn = document.getElementById('addBtn')

const createGroceryElement = grocery => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery.value
    // add "classList.add" DONT not forget the 'dot' between List AMD add.
    groceryElement.classList.add('groceryItem')

    // use an element to remove the items clicked.
    // this formula below removes the item clicked... 
    // IMPORTANT
    groceryElement.addEventListener('click', () => {
        groceryElement.remove()
        db.delete(grocery.key)

    })
    return groceryElement
}

const addGrocery = newGrocery => {
    GroceryList.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value = newGroceryInput.value
    
    if (value) {
        const key =shortid.generate()
        addGrocery({ key,value })  // <---- important part. create the ARRAY using ---> brackets {}
        db.set(key, value) 
        newGroceryInput.value = null
    }

})

// this command adds the items already listed by the creator on the top
groceries.map(grocery=> addGrocery (grocery))