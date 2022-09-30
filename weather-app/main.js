function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city},{state code},{country code}&appid=e86514e33357fb278ba625b0876d0139')
        .then((res) => res.json())
        .then((data) => this.displayWeather(data));

        displayWeather: function(data) {
            const { name } = data;
            const {icon, description} = data.weather[0];
            const {temp, humidity} = data.main;
            const{speed} = data.wind;
            console.log(name, icon, description, temp, humidity, speed);
            document.querySelector('.city').innerText = "Weather in" + name;
            document.querySelector('.icon').src = "https://openweathermap.org/img/wn" + icon + "@2x.png";
            document.querySelector('.description').innerText = description;
            document.querySelector('.temp').innerText = temp +"&deg;";
            document.querySelector('.humidity').innerText = "Humidity: " + humidity +  "%";
            document.querySelector('.wind').innerText = "Wind Speed: " + speed + "km/h";
            document.querySelector(".weather").classList.remove("loading");
        }
        search: function() {
            this.fetchgetWeather(document.querySelector(".search_bar").value);
        }
}

document
.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search_bar").addEventListener("keyup", function () {
    if(event.key == "Enter") {
        weather.search();
    }
})

weeather.fetchgetWeather("Denver");
