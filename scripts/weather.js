
// openweather.org
// My API key: f3e31394eb86ed958067f299ae42b4c7

const temperature = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");

const url = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=f3e31394eb86ed958067f299ae42b4c7`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayResults(data);
        } 
        else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    const temp = weatherData.main.temp;
    temperature.innerHTML = `${temp.toFixed(0) + "&deg;F"}`;

    const speed = weatherData.wind.speed;
    windSpeed.innerHTML = Math.round(speed);

    const src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute("src", src);
    weatherIcon.setAttribute("alt", desc);
    caption.textContent = desc;

    if (temp <= 50 && speed > 3) {
        let chill = Math.floor(35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16);
        windChill.innerHTML = `${chill + "&deg;F"}`;
    }
    else {
        windChill.innerHTML = "N/A";
    }
}

apiFetch();
