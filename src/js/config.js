
// import { cityElement, cityInput, countryElement, desElement, humidityElement, searchBtn, tempElement, weatherContainer, weatherElement, windElement } from "./constants.js";
// import { showError, showSuccess } from "./message.js";


// // const chaveAPI = digite a sua chave api;





// const getWeatherData = async (city) => {
//     try {
//         const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${chaveAPI}&lang=pt_br`;
//         const res = await fetch(apiWeatherUrl);
//         if (!res.ok) {
//             throw new Error('Erro ao obter dados do clima');
//         }
//         const data = await res.json();
//         console.log(data);
//         return data;
//     } catch (error) {
        
//         console.error('Erro ao obter dados do clima:', error);
//         return null;
//     }
// }

// const showWeatherData = async (city) => {
//     const data = await getWeatherData(city);

//     if (data) {
//         cityInput.value = ''; 
//         cityElement.innerText = data.name;
//         tempElement.innerText = parseInt(data.main.temp);
//         desElement.innerText = data.weather[0].description;
//         weatherElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
//         countryElement.innerText = data.sys.country;
//         humidityElement.innerText = `${data.main.humidity}%`;
//         windElement.innerText = `${data.wind.speed}km/h`;
//         weatherContainer.classList.remove("hidden");
//         showSuccess("sucesso ao obter dados do clima!!");
//     } else {
//         showError('Erro ao obter dados do clima. Por favor, tente novamente.');
//     }
// };


// searchBtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const city = cityInput.value;
//     showWeatherData(city);
// });

// cityInput.addEventListener("keyup", (e) => {
//     if (e.code === "Enter") {
//         const city = e.target.value;
//         showWeatherData(city);
//     }
// });