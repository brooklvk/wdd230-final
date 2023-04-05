const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    displayFruitsOrdered(data);
}

function displayFruitsOrdered(data) {

    console.log(data);//test 

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

    const fruit1 = document.querySelector("#fruit1").value;
    const fruit2 = document.querySelector("#fruit2").value;
    const fruit3 = document.querySelector("#fruit3").value;

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
    fruitp.innerHTML = `Fruits: ${fruit1[0].toUpperCase() + fruit1.substring(1).toLowerCase()}, ${fruit2[0].toUpperCase() + fruit2.substring(1).toLowerCase()}, ${fruit3[0].toUpperCase() + fruit3.substring(1).toLowerCase()}`;
    summary.appendChild(fruitp);

    const instructionsp = document.createElement("p");
    instructionsp.innerHTML = `Special Instructions: ${instructions}`;
    summary.appendChild(instructionsp);

    // Display fruits data 
    // Show total amount carbs, protein, fat, sugar, calories in the fruit choices 

    const fruitMessage = document.createElement("h3");
    fruitMessage.innerHTML = "Here is the nutrition information for the drink you ordered:";
    summary.appendChild(fruitMessage);

    const totalCarbs = document.createElement("p");
    totalCarbs.innerHTML = `Total Carbohydrates: ${""}`;
    summary.appendChild(totalCarbs);

    const totalProtein = document.createElement("p");
    totalProtein.innerHTML = `Total Protein: ${""}`;
    summary.appendChild(totalProtein);

    const totalFat = document.createElement("p");
    totalFat.innerHTML = `Total Fat: ${""}`;
    summary.appendChild(totalFat);

    const totalSugar = document.createElement("p");
    totalSugar.innerHTML = `Total Sugar: ${""}`;
    summary.appendChild(totalSugar);

    const totalCalories = document.createElement("p");
    totalCalories.innerHTML = `Total Calories: ${""}`;
    summary.appendChild(totalCalories);
    
    // Don't display form and 'order a drink' title 
    document.querySelector("form").style.display = "none";
    document.querySelector(".order-form h2").style.display = "none";
}

// Add onlick listener to button, run functions 
document.querySelector("button").addEventListener("click", getFruitData);

//also problem: required not working in HTML 