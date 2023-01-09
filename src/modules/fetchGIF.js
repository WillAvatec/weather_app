const apiKey = 'CeCW20a0inT35xM4tX0SgHTQ5JTCSqjf';
const apiUrl = 'https://api.giphy.com/v1/gifs/translate';
const request = 'closed';

async function getGIF(defaulted) {
  const data = defaulted.weather[0].description;
  const response = await fetch(
    `${apiUrl}?api_key=${apiKey}&s=${`${data} weather` || request}`,
    { mode: 'cors' }
  );

  const json = await response.json();

  return json;
}

async function setGIF(json) {
  const img = document.querySelector('#imagen');
  const value = await json;
  const gifUrl = await value.data.images.original.url;
  img.src = gifUrl;
}

export default async function searchGIF(search) {
  const json = await search;
  const returnedJSON = getGIF(json);
  setGIF(returnedJSON);
}
