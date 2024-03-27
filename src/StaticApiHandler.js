export function getStaticMapByCoordinate(latitude, longitude) {
  const apiKey = "b7c1948d-26fc-46fa-bae3-f5d8ae0f2862";
  // eslint-disable-next-line max-len
  const url = `https://static-maps.yandex.ru/v1?ll=${longitude},${latitude}&lang=ru_RU&size=250,250&z=9&apikey=${apiKey}`;
  return url;
}
