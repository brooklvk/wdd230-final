const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    displayFruitsOrdered(data);
}

function displayFruitsOrdered(data) {

    // Keep track of number of orders submitted for home page 
    // let numOfOrders = 0;
    // localStorage.setItem("numOfOrders", numOfOrders);
    // localStorage.clear;

    // Select 'summary' div to hold output information 
    const summary = document.querySelector(".summary");

    // Create a new title and intro 
    const title = document.createElement("h2");
    title.innerHTML = "Order Summary";
    summary.appendChild(title);

    const intro = document.createElement("h3");
    intro.innerHTML = "Here is the order you submitted!";
    summary.appendChild(intro);

    // Get all input information from form, and date 
    const now = new Date().toDateString();
    const fname = document.querySelector("#fname").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

    let fruit1 = document.querySelector("#fruit1").value;
    fruit1 = fruit1[0].toUpperCase() + fruit1.substring(1).toLowerCase();
    let fruit2 = document.querySelector("#fruit2").value;
    fruit2 = fruit2[0].toUpperCase() + fruit2.substring(1).toLowerCase();
    let fruit3 = document.querySelector("#fruit3").value;
    fruit3 = fruit3[0].toUpperCase() + fruit3.substring(1).toLowerCase()

    const instructions = document.querySelector("#instructions").value;

    // Display order information in HTML 
    const nowDisplay = document.createElement("p");
    nowDisplay.innerHTML = `${now}`;
    summary.appendChild(nowDisplay);

    const fnamep = document.createElement("p");
    fnamep.innerHTML = `First Name: ${fname}`;
    summary.appendChild(fnamep);

    const emailp = document.createElement("p");
    emailp.innerHTML = `Email: ${email}`;
    summary.appendChild(emailp);

    const phonep = document.createElement("p");
    phonep.innerHTML = `Phone: ${phone}`;
    summary.appendChild(phonep);

    const fruitp = document.createElement("p");
    fruitp.innerHTML = `Fruits: ${fruit1}, ${fruit2}, ${fruit3}`;
    summary.appendChild(fruitp);

    const instructionsp = document.createElement("p");
    instructionsp.innerHTML = `Special Instructions: ${instructions}`;
    summary.appendChild(instructionsp);

    // Retrieving data 
    
    // Get info for fruit 1 
    function isFruit1(fruit) {
        return fruit.name === fruit1;
    }
    const data1 = data.find(isFruit1);
    const carbs1 = data1.nutritions.carbohydrates;
    const protein1 = data1.nutritions.protein;
    const fat1 = data1.nutritions.fat;
    const sugar1 = data1.nutritions.sugar;
    const calories1 = data1.nutritions.calories;

    // Get info for fruit 2 
    function isFruit2(fruit) {
        return fruit.name === fruit2;
    }
    const data2 = data.find(isFruit2);
    const carbs2 = data2.nutritions.carbohydrates;
    const protein2 = data2.nutritions.protein;
    const fat2 = data2.nutritions.fat;
    const sugar2 = data2.nutritions.sugar;
    const calories2 = data2.nutritions.calories;

    // Get info for fruit 3 
    function isFruit3(fruit) {
        return fruit.name === fruit3;
    }
    const data3 = data.find(isFruit3);
    const carbs3 = data3.nutritions.carbohydrates;
    const protein3 = data3.nutritions.protein;
    const fat3 = data3.nutritions.fat;
    const sugar3 = data3.nutritions.sugar;
    const calories3 = data3.nutritions.calories;
    
    // Calculate totals 
    const carbsData = carbs1 + carbs2 + carbs3;
    const proteinData = protein1 + protein2 + protein3;
    const fatData = fat1 + fat2 + fat3;
    const sugarData = sugar1 + sugar2 + sugar3;
    const caloriesData = calories1 + calories2 + calories3;

    // Display fruits data 
    // Show total amount carbs, protein, fat, sugar, calories in the fruit choices 

    const fruitMessage = document.createElement("h3");
    fruitMessage.innerHTML = "Here is the nutrition information for the drink you ordered:";
    summary.appendChild(fruitMessage);

    const totalCarbs = document.createElement("p");
    totalCarbs.innerHTML = `Total Carbohydrates: ${carbsData}`;
    summary.appendChild(totalCarbs);

    const totalProtein = document.createElement("p");
    totalProtein.innerHTML = `Total Protein: ${proteinData}`;
    summary.appendChild(totalProtein);

    const totalFat = document.createElement("p");
    totalFat.innerHTML = `Total Fat: ${fatData}`;
    summary.appendChild(totalFat);

    const totalSugar = document.createElement("p");
    totalSugar.innerHTML = `Total Sugar: ${sugarData}`;
    summary.appendChild(totalSugar);

    const totalCalories = document.createElement("p");
    totalCalories.innerHTML = `Total Calories: ${caloriesData}`;
    summary.appendChild(totalCalories);
    
    // Don't display form and 'order a drink' title 
    document.querySelector("form").style.display = "none";
    document.querySelector(".order-form h2").style.display = "none";
}

// Add onlick listener to button, run functions 
document.querySelector("button").addEventListener("click", getFruitData);