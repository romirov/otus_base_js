import { getWeatherInCurrentCity } from "./WeatherInCurrentCity";
import { getWeatherInSelectedCity } from "./WeatherInSelectedCity";
// eslint-disable-next-line max-len
import {
  saveCityToLocalStorage,
  getCitiesFromLocalStorage,
} from "./LocalStorageHandler";
import { outputWeatherToHtml } from "./OutputWeatherToHtml";

// eslint-disable-next-line func-names
(async function () {
  // вывод погоды в текущем городе
  const currentLocationWeather = getWeatherInCurrentCity();
  outputWeatherToHtml(currentLocationWeather);

  // получение через форму, сохранение и вывод погоды в введенном городе
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    const inputEl = document.getElementById("userInput");
    // eslint-disable-next-line no-console
    if (!inputEl.innerText) {
      // eslint-disable-next-line no-alert
      alert("В поле userInput ничего не введено!");
    } else {
      const selectedCityName = inputEl.innerText;
      // eslint-disable-next-line no-console
      console.log(`Ввели город ${selectedCityName}`);
      saveCityToLocalStorage(selectedCityName);

      const selectedCityWeather = getWeatherInSelectedCity(selectedCityName);
      outputWeatherToHtml(selectedCityWeather);
    }

    button.removeEventListener("click");
  });

  // вывод сохраненных городов
  const memorizedCitiesEl = document.getElementById("memorizedCities");
  const memorizedCities = getCitiesFromLocalStorage();

  memorizedCities.forEach((city) => {
    const liEl = document.createElement("li");
    const aEl = document.createElement("a");

    aEl.href = "";
    aEl.setAttribute("id", "link");
    aEl.innerText = city;
    aEl.addEventListener("click", () => {
      // eslint-disable-next-line no-console
      console.log(`Нажали на ссылку с сохраненным городом ${city}`);
      outputWeatherToHtml(city);

      aEl.removeEventListener("click");
    });

    liEl.appendChild(aEl);
    memorizedCitiesEl(liEl);
  });

  // getWeatherInCurrentCity();

  // getWeatherInSelectedCity("");
  // saveCityToLocalStorage("");
  // getCitiesFromLocalStorage();

  //     // Получаем указатели на нужные элементы
  //     const formEl = document.querySelector("form");

  //     const weatherInfoInCurrentCityEl = document.querySelector("#weatherInfoInCurrentCity");
  //     // const weatherInCurrentCity = getWeatherInCurrentCity();

  //     const weatherInfoInSelectedCityEl = document.querySelector("#weatherInfoInSelectedCity");
  //     const listSavedCitiesEl = document.querySelector('#listSavedCities');

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
})();
