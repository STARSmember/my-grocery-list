
// create an array to hold the list of items you have created. 
// here is the array show at the bottom...
// const groceries = ['Milk', 'Cookie', 'Orange Juice']   // <---- array created. <---- OLD array
// array above this line of code.

// create a const array like the one above but CONST.

const groceries = [] // <-- new Array.
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
    groceryElement.innerText = grocery
    // add "classList.add" DONT not forget the 'dot' between List AMD add.
    groceryElement.classList.add('groceryItem')
    return groceryElement
}

const addGrocery = newGrocery => {
    GroceryList.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value = newGroceryInput.value
    if (value) {
        addGrocery(value)
        newGroceryInput.value = null
    }

})

// this command adds the items already listed by the creator on the top
groceries.map(grocery=> addGrocery (grocery))