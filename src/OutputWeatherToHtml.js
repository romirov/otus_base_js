import { getStaticMapByCoordinate } from "./StaticApiHandler";

/**
 * Функция выводит карту и погоду в html
 * @param {object} weather объект с местоположением и погодой в нем
 */
export function outputWeatherToHtml(weather) {
  const cityName = weather.name;
  // eslint-disable-next-line prefer-destructuring
  const temp = weather.main.temp;
  // eslint-disable-next-line prefer-destructuring
  const icon = weather.weather[0].icon;

  const selectedCityMapEl = document.getElementById("selectedCityMap");
  // eslint-disable-next-line max-len
  const selectedCityWeatherEl = document.getElementById("selectedCityWeather");

  const imgEl = document.createElement("img");
  // eslint-disable-next-line max-len
  imgEl.src = getStaticMapByCoordinate(weather.coord.lat, weather.coord.lon);

  const paragraphEl = document.createElement("p");
  // eslint-disable-next-line max-len
  paragraphEl.textContent = `City: ${cityName} Temperature: ${temp} Icon: ${icon}`;

  selectedCityMapEl.appendChild(imgEl);
  selectedCityWeatherEl.appendChild(paragraphEl);
}
