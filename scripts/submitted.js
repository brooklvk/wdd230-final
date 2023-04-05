// Display # of drinks submitted from localstorage 
const submitted = document.querySelector(".submitted");
const orders = localStorage.getItem("numOfOrders");
const p = document.createElement("p");

p.innerHTML = `You have submitted ${orders} drink order(s) on our Fresh page!`;
submitted.appendChild(p);