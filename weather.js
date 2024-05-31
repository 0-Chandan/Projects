const inputbx = document.querySelector(".input-box");
const searchbtn =document.querySelector("#searchbtn");
const weather_img = document.querySelector(".wheather-img");
const temperature = document.querySelector(".temperature");
const discription = document.querySelector(".discription");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const  weather_body = document.querySelector(".weather-body");
const checkweather = async(city)=>{
const API_Key = "38f42568471e3be9153f6b4dc9934dd8";
const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;
let weather_data = await fetch(`${URL}`).then(res=>res.json());
if(weather_data.cod===`404`)
    {
        console.log("error");
        location_not_found.style.display= "flex";
        weather_body.style.display = "none";
        return;
    }
    location_not_found.style.display= "none";
    weather_body.style.display = "flex";
temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}<sup>o</sup>C`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
wind_speed.innerHTML = `${weather_data.wind.speed}KM/H`;
discription.innerHTML=`${weather_data.weather[0].description}`;

switch(weather_data.weather[0].main){
    case "Clouds" :
        weather_img.src="assets/cloud.png";
        break;
        case "Clear" :
        weather_img.src="assets/clear.png";
        break;
        case "Rain" :
        weather_img.src="assets/rain.png";
        break;
        case "Mist" :
        weather_img.src="assets/mist.png";
        break;
        case "Snow" :
        weather_img.src="assets/snow.png";
        break;
    }
}



searchbtn.addEventListener("click",()=>{
    checkweather(inputbx.value);
});