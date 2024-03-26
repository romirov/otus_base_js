// eslint-disable-next-line import/extensions
import { getWeatherInCurrentCity } from "./WeatherInCurrentCity.js";
// eslint-disable-next-line import/extensions
import { getWeatherInSelectedCity } from "./WeatherInSelectedCity.js";
// eslint-disable-next-line import/extensions, max-len
import {
  saveCityToLocalStorage,
  outputCitiesFromLocalStorage,
  // eslint-disable-next-line import/extensions
} from "./LocalStorageHandler.js";
// eslint-disable-next-line import/extensions
import { outputWeatherToHtml } from "./OutputWeatherToHtml.js";

const applicationForm = document.getElementById("applicationForm");

/**
 * Функция получает введенный город из формы, сохранят его в localStorage и отображает погоду в нем
 */
async function serializeForm(formNode) {
  const { elements } = formNode;
  const selectedCityName = elements.userInput.value;
  // eslint-disable-next-line no-console
  console.log(`Ввели город ${selectedCityName}`);
  saveCityToLocalStorage(selectedCityName);

  const selectedCityWeather = await getWeatherInSelectedCity(selectedCityName);
  outputWeatherToHtml(selectedCityWeather);
  outputCitiesFromLocalStorage();
}

/**
 * Функция получает форму, по событию submit
 * @param {event} event
 */
function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicationForm);
}

// eslint-disable-next-line func-names
(async function () {
  // вывод погоды в текущем городе
  const currentLocationWeather = await getWeatherInCurrentCity();
  outputWeatherToHtml(currentLocationWeather);

  // получение через форму, сохранение и вывод погоды в введенном городе
  applicationForm.addEventListener("submit", handleFormSubmit);

  // вывод сохраненных городов
  outputCitiesFromLocalStorage();
})();
