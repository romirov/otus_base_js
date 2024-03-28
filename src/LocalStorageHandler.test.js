// eslint-disable-next-line import/extensions
import {
  saveCityToLocalStorage,
  getCitiesFromLocalStorage,
  outputCitiesFromLocalStorage,
  // eslint-disable-next-line import/extensions
} from "./LocalStorageHandler.js";

describe("local storage handler test", () => {
  test("save city to local storage test", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
    saveCityToLocalStorage("Moscow");
    // eslint-disable-next-line max-len
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "Moscow",
      "Moscow",
    );
  });

  test("get city from local storage test", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
    saveCityToLocalStorage("Moscow");
    // eslint-disable-next-line max-len
    expect(getCitiesFromLocalStorage()).toStrictEqual(["Moscow"]);
  });

  test("output cities from local storage test", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

    // eslint-disable-next-line max-len
    document.body.innerHTML =
      '<ul id="memorizedCities" class="memorizedCities"></ul>';

    saveCityToLocalStorage("Moscow");
    outputCitiesFromLocalStorage();

    // eslint-disable-next-line max-len
    expect(global.document.getElementById("link").innerText).toBe("Moscow");
  });
});
