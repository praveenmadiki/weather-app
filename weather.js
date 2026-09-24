const apikey = "1b8c8077d9a137f3be2d1caad58e0c3d";

const searchvalue = document.querySelector(".searchcard input");
const searchbtn = document.querySelector(".searchcard button");

async function weather(city) {

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    );

    const data = await response.json();

    if (city === "") {
        document.querySelector(".title").style.display="block";
        document.querySelector(".weather").style.display="none";
        alert("Please enter a city name");
        

        return;
    }
    if (!response.ok) {
        alert("City not found \nMight be you entered wrong \nCheck once");
        return;
    }

    document.querySelector("#cityname").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(`${data.main.temp}`)+"°C";
    document.querySelector(".humvalue").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".windvalue").innerHTML = `${data.wind.speed} km/h`;

    const weatherIcon = document.querySelector(".weather-icon");

if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "/weather-app-img/images/clouds.png";
}
else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "/weather-app-img/images/clear.png";
}
else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "/weather-app-img/images/rain.png";
}
else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "/weather-app-img/images/drizzle.png";
}
else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "/weather-app-img/images/mist.png";
}
else if(data.weather[0].main === "Snow"){
    weatherIcon.src ="/weather-app-img/images/snow.png"
}

document.querySelector(".weather").style.display="block";
document.querySelector(".title").style.display="none";
}

searchbtn.addEventListener("click", () => {
    weather(searchvalue.value);
});

searchvalue.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        weather(searchvalue.value);
    }
});
