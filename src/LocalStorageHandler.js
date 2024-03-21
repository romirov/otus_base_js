const AMOUNT_SAVED_CITIES = 10;

/**
 * Функция сохраняет город в localStorage
 *
 * @param {string} cityName
 */
export function saveCityToLocalStorage(cityName) {
  const amountCities = localStorage.length;
  // не сохраняем город, если он уже сохранен
  if (localStorage.getItem(cityName) == null) {
    // если сохраненных городов меньше 10, то сохраняем
    if (amountCities < AMOUNT_SAVED_CITIES) {
      localStorage.setItem(cityName, cityName);
    } else {
      // если сохраненных городов 10, то нулевой удаляем, а новый записываем последним
      const key = localStorage.key(0);
      localStorage.removeItem(key);
      localStorage.setItem(cityName, cityName);
    }
  }
}

/**
 * Функция получет города из localStorage
 * @returns массив городов
 */
export function getCitiesFromLocalStorage() {
  return { ...localStorage };
}
