// This function will return the values from the API Service as a json
//  // Defining data values

const apiKey = 'a44ed5c8f946f714b0a5dec238292ecc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const search = 'London';

async function getData(input) {
  const fetching = await fetch(
    `${apiUrl}?q=${input || search}&appid=${apiKey}`,
    {
      mode: 'cors',
    }
  );

  const json = await fetching.json();
  return json;
}

export default getData;
