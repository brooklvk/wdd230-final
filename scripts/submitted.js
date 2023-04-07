// Display # of drinks submitted from localstorage 
const submitted = document.querySelector(".submitted");
const orders = localStorage.getItem("numOfOrders");
const p = document.createElement("p");

if (orders == null) {
    p.innerHTML = `You have submitted 0 drink order(s) on our Fresh page!`;
}
else if (orders != null) {
    p.innerHTML = `You have submitted ${orders} drink order(s) on our Fresh page!`;
}

submitted.appendChild(p);