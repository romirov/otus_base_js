// eslint-disable-next-line import/extensions
import { getWeatherInSelectedCity } from "./WeatherInSelectedCity.js";

describe("get weather in selected city test", () => {
  test("get weather in selected city test", async () => {
    const selectedCityWeather = {
      temp: 20,
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(selectedCityWeather),
      }),
    );
    jest.fn("./getWeatherInSelectedCity").mockReturnValue("test");
    expect(await getWeatherInSelectedCity("test")).toBe(selectedCityWeather);
  });
});
