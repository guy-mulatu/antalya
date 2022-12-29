const cookieWeather = document.cookie.split('weather_cookie=');
let description;
let icon;

if (cookieWeather.length > 1) {
  description = 'TBD';
  icon = 'TBD';
}



const getWeatherIcon = () => {
  let iconApi;

  // getWeatherDescription().then((data) => {
  //    iconApi = "http://openweathermap.org/img/wn/" + data.icon + "@2x.png"
  //   //  console.log(data)
  //   });
  
  console.log(iconApi);

}

async function apiCall(url) {
  // let data;

  let result = await fetch(url, {
    "method": "GET",
    "headers": {
    }
  });

  let response = await result.json();

  return response;
}

// description = getWeatherDescription();
// icon = getWeatherIcon();

export { apiCall };
