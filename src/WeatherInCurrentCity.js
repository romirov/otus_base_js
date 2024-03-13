import { getWeatherInSelectedCity } from "./WeatherInSelectedCity";

/**
 * Функция должна делать запрос на
 * https://get.geojs.io/v1/ip/geo.json
 *
 * Запрос возвращает данные о текущем городе по ip пользователя в формате JSON
 *
 * Функция должна возвращать (Promise)
 */
async function getCurrentLocationInformationByIp() {
  const url = "https://get.geojs.io/v1/ip/geo.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    // eslint-disable-next-line max-len, no-console
    console.error(
      "Could`t find current location information by ip, because:",
      error,
    );
    return null;
  }
}

/**
 * Функция получает информацию о текущем местоположении пользователя по ip
 * и при помощи ее получает информацию о погоде
 *
 * Функция возвращает (Promise) данные с информацией о погоде в текущем местоположении
 */

export async function getWeatherInCurrentCity() {
  const currentLocation = await getCurrentLocationInformationByIp();
  // eslint-disable-next-line max-len
  const weatherInCurrentCity = await getWeatherInSelectedCity(
    currentLocation.city,
  );
  return weatherInCurrentCity;
}
