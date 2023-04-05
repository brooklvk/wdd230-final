
// Hamburger menu in nav 
const nav = document.querySelector("nav");
const icon = document.querySelector(".menu");

icon.addEventListener("click", () => {nav.classList.toggle("responsive")}, false);

// Current year in footer 
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

// Last Modified in footer 
document.querySelector("#lastModified").innerHTML = document.lastModified;
