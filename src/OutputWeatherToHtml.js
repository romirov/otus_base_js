// eslint-disable-next-line import/extensions
import { getStaticMapByCoordinate } from "./StaticApiHandler.js";
// eslint-disable-next-line import/extensions
import { removeAllChildNodes } from "./RemoveAllChildNodes.js";

/**
 * Функция выводит карту и погоду в html
 * @param {object} weather объект с местоположением и погодой в нем
 */
export async function outputWeatherToHtml(weather) {
  const cityName = weather.name;
  // eslint-disable-next-line prefer-destructuring
  const temp = weather.main.temp;
  // eslint-disable-next-line prefer-destructuring
  const imgWeather = weather.weather[0].icon;

  const selectedCityMapEl = document.getElementById("selectedCityMap");
  if (selectedCityMapEl.childNodes.length >= 1)
    removeAllChildNodes(selectedCityMapEl);

  // eslint-disable-next-line max-len
  const selectedCityWeatherEl = document.getElementById("selectedCityWeather");
  if (selectedCityWeatherEl.childNodes.length >= 3)
    removeAllChildNodes(selectedCityWeatherEl);

  const imgEl = document.createElement("img");
  imgEl.setAttribute("id", "map");
  // eslint-disable-next-line max-len
  imgEl.src = await getStaticMapByCoordinate(
    weather.coord.lat,
    weather.coord.lon,
  );

  const pCityNameEl = document.createElement("p");
  pCityNameEl.setAttribute("id", "cityName");
  // eslint-disable-next-line max-len
  pCityNameEl.textContent = `City: ${cityName}`;

  const pCityWeatherEl = document.createElement("p");
  pCityWeatherEl.setAttribute("id", "cityWeather");
  // eslint-disable-next-line max-len
  pCityWeatherEl.textContent = `Temperature: ${Math.round(temp)} ℃`;

  const imgWeatherEl = document.createElement("img");
  imgWeatherEl.setAttribute("id", "cityWeatherImg");
  imgWeatherEl.src = `http://openweathermap.org/img/wn/${imgWeather}.png`;

  selectedCityMapEl.append(imgEl);
  selectedCityWeatherEl.append(pCityNameEl);
  selectedCityWeatherEl.append(pCityWeatherEl);
  selectedCityWeatherEl.append(imgWeatherEl);
}
