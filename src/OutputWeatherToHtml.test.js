// eslint-disable-next-line import/extensions
import { outputWeatherToHtml } from "./OutputWeatherToHtml.js";

describe("output weather to html test", () => {
  test("output weather to html test", async () => {
    document.body.innerHTML =
      '<div id="selectedCityMap"></div>' +
      '<div id="selectedCityWeather"></div>';

    const weather = {
      name: "Moscow",
      main: {
        temp: 20,
      },
      weather: {
        0: {
          icon: "02d",
        },
      },
      coord: {
        lat: 1,
        lon: 1,
      },
    };

    await outputWeatherToHtml(weather);
    expect(document.getElementById("map").src).not.toBe("");
    // eslint-disable-next-line max-len
    expect(document.getElementById("cityName").textContent).toBe(
      "City: Moscow",
    );
    // eslint-disable-next-line max-len
    expect(document.getElementById("cityWeather").textContent).toBe(
      "Temperature: 20 ℃",
    );
    // eslint-disable-next-line max-len
    expect(document.getElementById("cityWeatherImg").src).toBe(
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
    );
  });
});
