const API_KEY = "f0ed8605a6391457b3f623bc8aee5338";

const getWeather = async(latitude, longitude) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&exclude=alerts&lon=${longitude}&appid=${API_KEY}&units=metric`)
    const json = await response.json();
    const data = json.daily;

    /* Option 1: Use Async Await */
    const region = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child")
    region.innerText = json.timezone;
    weather.innerText = data[0].weather[0].main;
    
    /* Options 2: Use fetch().then() */
    /* fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&exclude=alerts&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json)
        .then((data) => console.log(data[0].weather[0].main)); */
}

const getLocation = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
};

const getError = () => alert("Couldn't Get Your Location");

navigator.geolocation.getCurrentPosition(getLocation, getError);