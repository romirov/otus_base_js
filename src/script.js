// import {getWeatherInSelectedCity} from './WeatherInSelectedCity'
// import {getWeatherInCurrentCity} from './WeatherInCurrentCity'

// (async function () {
//     // Получаем указатели на нужные элементы
//     const formEl = document.querySelector("form");

//     const weatherInfoInCurrentCityEl = document.querySelector("#weatherInfoInCurrentCity");
//     // const weatherInCurrentCity = getWeatherInCurrentCity();

//     const weatherInfoInSelectedCityEl = document.querySelector("#weatherInfoInSelectedCity");
//     const listSavedCitiesEl = document.querySelector('#listSavedCities');
//     const amountSavedCities = 10;

//     // showWeather(weatherInfoInCurrentCityEl, weatherInCurrentCity);
//     debugger;
//     showSavedCities();

//     function showWeather(el, weatherInfo) {
//         el.innerHTML = JSON.stringify(weatherInfo, null, 2);
//     }

//     function showSavedCities(el) {
//         for(let i = 0; i < localStorage.length; i++) {
//             listSavedCitiesEl.append(
//                 createLinkForSavedCity(localStorage.key(i))
//             );
//         }
//     }

//     async function getWeatherInCurrentCity() {
//         const url = "https://get.geojs.io/v1/ip/geo.json";

//         let response = await fetch(url);
//         console.log(response);

//         if (response.ok) { // если HTTP-статус в диапазоне 200-299
//             // получаем тело ответа (см. про этот метод ниже)
//             return await response.json();
//         } else {
//             console.error("Ошибка HTTP: " + response.status);
//             return null;
//         }
//     }

//     async function getWeatherInSelectedCity(cityName) {
//         const apiKey = "";
//         const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;

//         let response = await fetch(url);
//         if (response.ok) { // если HTTP-статус в диапазоне 200-299
//             // получаем тело ответа (см. про этот метод ниже)
//             let json = await response.json();
//             return json;
//           } else {
//             console.error("Ошибка HTTP: " + response.status);
//             return null;
//           }
//     }

//     formEl.addEventListener("submit", async (ev) => {
//         // чтобы не перезагружать страницу
//         ev.preventDefault();

//         // читаем значение из формы
//         const formElement = ev.target;
//         const inputEl = formElement.querySelector("input");
//         const cityName = inputEl.value;
//         saveCity(cityName);
//         inputEl.value = "";

//         const weather = await getWeatherInSelectedCity(cityName);
//         showWeather(weatherInfoInSelectedCityEl, weather);
//       });

//     function saveCity(cityName) {
//         let amountCities = localStorage.length;
//         //не сохраняем город, если он уже сохранен
//         if(localStorage.getItem(cityName) == null){
//             //если сохраненных городов меньше 10, то сохраняем
//             if(amountCities < amountSavedCities){
//                 localStorage.setItem(cityName, cityName)
//             } else{
//                 //если сохраненных городов 10, то нулевой удаляем, а новый записываем последним
//                 let key = localStorage.key(0);
//                 localStorage.removeItem(key);
//                 localStorage.setItem(cityName, cityName);
//             }
//         }
//     }

//     function createLinkForSavedCity(cityName) {
//         let btn = document.createElement('btn');
//         btn.title = cityName;
//         btn.addEventListener("click", async (ev) => {
//             // чтобы не перезагружать страницу
//             ev.preventDefault();

//             const weather = await getWeatherInSelectedCity(cityName);
//             showWeather(weatherInfoInSelectedCityEl, weather);
//         });
//         return btn;
//     }

// })();
