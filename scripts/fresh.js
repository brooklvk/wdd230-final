const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    displayFruitsOrdered(data);
}

function displayFruitsOrdered(data) {
    //use a JavaScript event handler to produce a formatted output area on this same page showing:
    //the input values of the order (7 inputs = first name, email, phone, three selected fruits, and special instructions), the order date, and
    //the total amount of carbohydrates, protein, fat, sugar, and calories based upon the three fruit choices selected on the form. 
    // //The data source provides that information per fruit.

    // console.log(data);//works 

    const summary = document.querySelector(".summary");

    let fruit1 = document.querySelector("#fruit1").value;
    //.options[fruit1.selectedIndex].text;
    // localStorage.setItem("fruit1", fruit1);

    const fruit1p = document.createElement("p");
    fruit1p.innerHTML = `${fruit1} has ${""}`;
    summary.appendChild(fruit1p);

    let fruit2 = document.querySelector("#fruit2").value;
    // localStorage.setItem("fruit2", fruit2);

    const fruit2p = document.createElement("p");
    fruit2p.innerHTML = `${fruit2} has ${""}`;
    summary.appendChild(fruit2p);

    let fruit3 = document.querySelector("#fruit3").value;
    // localStorage.setItem("fruit3", fruit3);

    const fruit3p = document.createElement("p");
    fruit3p.innerHTML = `${fruit3} has ${""}`;
    summary.appendChild(fruit3p);

    // const title = document.createElement("h2").innerHTML = "Order Summary";
    // summary.appendChild(title);

    

    

    document.querySelector("form").style.display = "none";

    document.querySelector(".order-form h2").style.display = "none";

    
    // localStorage.clear;
    
}

document.querySelector("button").addEventListener("click", getFruitData);
