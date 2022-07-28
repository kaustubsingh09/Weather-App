'use strict';

const curTime = document.querySelector('.cur-time');
const curLocation = document.querySelector('.cur-location');
const temperature = document.querySelector('.temperature');
const winds = document.querySelector('.wind1');
const currentWeather = document.querySelector('.weather');
const key = 'f3c2f6ee81ba2d77c597a83d9fe7439f';

const getLocation = navigator.geolocation.getCurrentPosition(function(position){
    const {latitude} = position.coords;
    const {longitude} = position.coords;

    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=120816311864564e15883752x58888`)
    .then(response => response.json())
    .then(newapi => {
        curLocation.textContent = newapi['city'];
    })

  // weather api
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        let addTemperature = data['main']['temp'];
        let windSpeed = data['wind']['speed'];
        let temperatureType = data['weather'][0]['main'];

        temperature.textContent = `${addTemperature}°C`;
        winds.textContent = `${windSpeed}km/h`;
        currentWeather.textContent = temperatureType;










    })
})




const now = new Date();
const options = {
    hour: 'numeric',
    minutes: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
};
curTime.textContent = new Intl.DateTimeFormat('eng-GB',options).format(now);