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

    // Display all information in HTML 
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

    const fruit1p = document.createElement("p");
    fruit1p.innerHTML = `1st Fruit: ${fruit1[0].toUpperCase() + fruit1.substring(1).toLowerCase()}`;
    summary.appendChild(fruit1p);

    const fruit2p = document.createElement("p");
    fruit2p.innerHTML = `2nd Fruit: ${fruit2[0].toUpperCase() + fruit2.substring(1).toLowerCase()}`;
    summary.appendChild(fruit2p);

    const fruit3p = document.createElement("p");
    fruit3p.innerHTML = `3rd Fruit: ${fruit3[0].toUpperCase() + fruit3.substring(1).toLowerCase()}`;
    summary.appendChild(fruit3p);

    const instructionsp = document.createElement("p");
    instructionsp.innerHTML = `Special Instructions: ${instructions}`;
    summary.appendChild(instructionsp);

    // Display fruits ordered and data 
    // Show total amount carbs, protein, fat, sugar, calories in three fruit choices 


    

    

    document.querySelector("form").style.display = "none";

    document.querySelector(".order-form h2").style.display = "none";
    
}

document.querySelector("button").addEventListener("click", getFruitData);
