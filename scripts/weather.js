
// openweather.org
// My API key: f3e31394eb86ed958067f299ae42b4c7

const temperature = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feels-like");
const weatherIcon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");
const humidity = document.querySelector("#humidity");
const sunset = document.querySelector("#sunset");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const url = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=f3e31394eb86ed958067f299ae42b4c7`;
const urlforecast = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=f3e31394eb86ed958067f299ae42b4c7`;

async function apiFetch(url) {
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

    const feels = weatherData.main.feels_like;
    feelsLike.innerHTML = `${feels.toFixed(0) + "&deg;F"}`;

    const src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute("src", src);
    weatherIcon.setAttribute("alt", desc);
    caption.textContent = desc;

    const humid = weatherData.main.humidity;
    humidity.innerHTML = `${humid.toFixed(0)}`;

    const set = weatherData.sys.sunset;
    const setDate = new Date(set*1000).toLocaleString();
    sunset.innerHTML = `${setDate}`;

    const temp1 = weatherData.main.temp;
    day1.innerHTML = temp1;

    const temp2 = weatherData.main.temp;
    day2.innerHTML = temp2;

    const temp3 = weatherData.main.temp;
    day3.innerHTML = temp3;
}

apiFetch(url);
apiFetch(urlforecast);