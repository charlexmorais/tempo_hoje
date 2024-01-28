import { chaveApi } from "./config.js";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.getElementById("search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const desElement = document.querySelector("#description");
const weatherElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country span");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#time_date");

const getWeatherData = async (city) => {
    try {
        const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${chaveApi}&lang=pt_br`;
        const res = await fetch(apiWeatherUrl);
        if (!res.ok) {
            throw new Error('Erro ao obter dados do clima');
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        
        console.error('Erro ao obter dados do clima:', error);
        return null;
    }
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    if (data) {
        cityInput.value = ''; 
        cityElement.innerText = data.name;
        tempElement.innerText = parseInt(data.main.temp);
        desElement.innerText = data.weather[0].description;
        weatherElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        countryElement.innerText = data.sys.country;
        humidityElement.innerText = `${data.main.humidity}%`;
        windElement.innerText = `${data.wind.speed}km/h`;
        weatherContainer.classList.remove("hide");
        showSuccess("sucesso ao obter dados do clima!!");
    } else {
        showError('Erro ao obter dados do clima. Por favor, tente novamente.');
    }
};


searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }
});


function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.textContent = message;
    document.body.appendChild(errorElement);

    
    setTimeout(() => {
        errorElement.remove();
    }, 2000);
}


function showSuccess(message) {
    const successElement = document.createElement('div');
    successElement.classList.add('success');
    successElement.textContent = message;
    document.body.appendChild(successElement);

    
    setTimeout(() => {
        successElement.remove();
    }, 2000);
}

