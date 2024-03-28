// eslint-disable-next-line import/extensions
import { getStaticMapByCoordinate } from "./StaticApiHandler.js";

describe("get static map by coordinate test", () => {
  test("get static map by coordinate test", () => {
    const lon = 1;
    const lat = 1;
    // eslint-disable-next-line max-len
    const expectedUrl = `https://static-maps.yandex.ru/v1?ll=${lon},${lat}&lang=ru_RU&size=250,250&z=9&apikey=`;

    expect(getStaticMapByCoordinate(1, 1)).toContain(expectedUrl);
  });
});
