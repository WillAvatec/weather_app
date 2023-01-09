import getData from './modules/fetchWeather';
import dataHandler from './modules/DataHandler';
import searchGIF from './modules/fetchGIF';

// When the user use space actualize search variable

const input = document.querySelector('#input');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const search = input.value;
    input.value = '';
    const json = getData(search);
    dataHandler(json);
    searchGIF(json);
  }
});

const apiDefault = getData();
console.log(apiDefault);
dataHandler(apiDefault);
searchGIF(apiDefault);
