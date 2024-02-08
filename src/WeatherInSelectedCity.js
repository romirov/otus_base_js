/**
   * Функция должна делать запрос на
   * https://api.openweathermap.org/data/2.5/weather?units=metric&q={{CITY_NAME}}&appid={{APP_ID}}
   * где
   *  {{CITY_NAME}} должен быть заменен на имя города
   *  {{APP_ID}} должен быть заменен на ключ приложения
   * Запрос возвращает данные в формате JSON
   *
   * функция должна возвращать (Promise) данные с информацией о погоде в выбранном городе
   * @param {string} cityName
   */
// export async function getWeatherInSelectedCity(cityName) {
//     const apiKey = "7881bfb7be02c74633e5fdee4ff41329";
//     const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;

//     try {
//       const response = await fetch(url);
//       return await response.json();
//     } catch (error) {
//       console.error("Error:", error);
//       return null;
//     }
// }