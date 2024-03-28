import {
  getWeatherInCurrentCity,
  // eslint-disable-next-line import/extensions
} from "./WeatherInCurrentCity.js";

describe("weather in current city test", () => {
  // test('get current location information by ip test', async () => {
  //     global.fetch = jest.fn(() => Promise.resolve({
  //         json: () => Promise.resolve()
  //     }));

  //     const json = await getCurrentLocationInformationByIp();
  //     expect(global.fetch).toHaveBeenCalledWith(
  //         'https://get.geojs.io/v1/ip/geo.json'
  //         );

  //     expect(json).not.toBeNull();
  // });

  test("get weather in current city test", async () => {
    const currentLocation = {
      city: "test",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(currentLocation),
      }),
    );

    // eslint-disable-next-line max-len
    jest
      .fn("./getCurrentLocationInformationByIp")
      .mockReturnValue(currentLocation);

    const currentLocationWeather = {
      temp: 20,
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(currentLocationWeather),
      }),
    );
    jest.fn("./getWeatherInSelectedCity").mockReturnValue("test");
    expect(await getWeatherInCurrentCity()).toBe(currentLocationWeather);
  });
});
