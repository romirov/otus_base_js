export async function getStaticMapByCoordinate(latitude, longitude) {
  const apiKey = "b7c1948d-26fc-46fa-bae3-f5d8ae0f2862";
  // eslint-disable-next-line max-len
  const url = `https://static-maps.yandex.ru/v1?lang=ru_RU&ll=${latitude},${longitude}&z=9&size=450,450&apikey=${apiKey}`;
  try {
    const response = await fetch(url);
    return response.createObjectURL;
  } catch (error) {
    // eslint-disable-next-line max-len, no-console
    console.error("Could`t get a map by coordinate:", error);
    return null;
  }
}
