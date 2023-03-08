let weather = {
    city: 'tokyo',
    apiKey: '6ed13b8704e280c7b07c7f3594d5ffc1',
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city
        +"&units=metric&APPID=" 
        + weather.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    

    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon +'@2x.png';
        document.querySelector('.description').textContent = description;
        document.querySelector('.temp').innerHTML = `Temperature:  + ${temp}<span>&#8451;</span>`;
        document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}<span>&#37;</span>`;
        document.querySelector('.speed').textContent = `Speed: ${speed} KM/H`;   
    },

    search: function() {
        weather.fetchWeather(document.querySelector('.search-bar').value);
    },

    setBackground: function() {
            document.querySelector('.container').style.backgroundImage = "url('../assets/images/snow.jpg')";
    }
}

document.querySelector('button').addEventListener('click', function() {
    weather.search();
    weather.setBackground();
});