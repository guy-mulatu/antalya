
const TYPE_WEATHER = 1;
// for future api calls, have a list of type to handle any specificity
const types = {
  TYPE_WEATHER: 'weather'
};

async function apiCall(url, callType) {
  const cookieWeather = document.cookie.split('weather_cookie=');
  let description;
  let icon;

  // if (callType === TYPE_WEATHER && cookieWeather.length > 1) {
  //   description = 'TBD';
  //   icon = 'TBD';
  // }

  let result = await fetch(url, {
    "method": "GET",
    "headers": {
    }
  });

  let response = await result.json();

  return response;
}

export { apiCall, types };
