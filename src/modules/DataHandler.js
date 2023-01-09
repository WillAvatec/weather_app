/* eslint-disable require-jsdoc */
export default async function DataHandler(json) {
  const ready = await json;
  const title = document.querySelector('#title');
  const temperature = document.querySelector('#temperature');
  const weather = document.querySelector('#weather');
  const description = document.querySelector('#description');

  title.textContent = `${ready.name},${ready.sys.country}`;
  temperature.textContent = `${ready.main.temp} °C`;
  weather.textContent = ready.weather[0].main;
  description.textContent = ready.weather[0].description;
}
