
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

//use a JavaScript event handler to produce a formatted output area on this same page showing:
//the input values of the order (7 inputs = first name, email, phone, three selected fruits, and special instructions), the order date, and
//the total amount of carbohydrates, protein, fat, sugar, and calories based upon the three fruit choices selected on the form. The data source provides that information per fruit.

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data); 
    displayFruits(data);
}

function displayFruits(fruit) {
    console.log(fruit[0]);
    fruit.forEach (([]) => {
        
        

    })
}

getFruitData();