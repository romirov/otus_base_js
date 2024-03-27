// eslint-disable-next-line import/extensions
import { outputWeatherToHtml } from "./OutputWeatherToHtml.js";
// eslint-disable-next-line import/extensions
import { getWeatherInSelectedCity } from "./WeatherInSelectedCity.js";

const AMOUNT_SAVED_CITIES = 10;

/**
 * Функция сохраняет город в localStorage
 *
 * @param {string} cityName
 */
export function saveCityToLocalStorage(cityName) {
  const amountCities = localStorage.length;
  // не сохраняем город, если он уже сохранен
  if (localStorage.getItem(cityName) == null) {
    // если сохраненных городов меньше 10, то сохраняем
    if (amountCities < AMOUNT_SAVED_CITIES) {
      localStorage.setItem(cityName, cityName);
    } else {
      // если сохраненных городов 10, то нулевой удаляем, а новый записываем последним
      const key = localStorage.key(0);
      localStorage.removeItem(key);
      localStorage.setItem(cityName, cityName);
    }
  }
}

/**
 * Функция получет города из localStorage
 * @returns массив городов
 */
export function getCitiesFromLocalStorage() {
  return Object.keys(localStorage);
}

/**
 * Функция выводит сохраненные города
 */
export function outputCitiesFromLocalStorage() {
  // вывод сохраненных городов
  const memorizedCitiesEl = document.getElementById("memorizedCities");
  const memorizedCities = getCitiesFromLocalStorage();

  if (memorizedCities.length > 0) {
    memorizedCities.forEach((city) => {
      const liEl = document.createElement("li");
      const aEl = document.createElement("a");

      aEl.href = "";
      aEl.setAttribute("id", "link");
      aEl.innerText = city;
      aEl.addEventListener("click", async (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-console
        console.log(`Нажали на ссылку с сохраненным городом ${city}`);
        const weather = await getWeatherInSelectedCity(city);
        outputWeatherToHtml(weather);
      });

      liEl.appendChild(aEl);
      memorizedCitiesEl.appendChild(liEl);
    });
  }
}
