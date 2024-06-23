const apikey = "d6add236fa3524cd72982b9bc3ce6e08";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button i");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
    
    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "weather/clouds.png";
    }

    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "weather/clear.png";
    }

    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "weather/rain.png";
    }

    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "weather/drizzle.png";
    }

    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "weather/mist.png";
    }

    document.querySelector(".weather").style.display = "block";

}
    searchBtn.addEventListener('click', ()=>{
        checkWeather(searchBox.value);
    })
