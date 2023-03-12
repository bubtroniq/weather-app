// Google maps

// Initialize and add the map
function initMap() {
    // The location of Uluru
const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}
  
  window.initMap = initMap;

// let q = document.querySelector('.search-bar').value;

const fetchDetailedWeather = (q) => {
    
    fetch("http://api.weatherapi.com/v1/forecast.json?key=4a95f442039e45748c1235242231003&q=" + q + "&days=10&aqi=no&alerts=yes")
        .then((response) => response.json())
        .then((data2) => displayDetailedWeather(data2))
};

const displayDetailedWeather = (data2) => {
    const {name, country, region} = data2.location;
    const {sunrise, sunset} = data2.forecast.forecastday[0].astro;
    document.querySelector('.name').textContent = name;
    document.querySelector('#country').textContent = country;
    document.querySelector('.region').textContent = region;
    document.querySelector('.sunrise').textContent = `Sunrise: ${sunrise}`;
    document.querySelector('.sunset').textContent = `Sunset: ${sunset}`;


    for(day of data2.forecast.forecastday) {
        console.log(day); 
        let h3 = document.createElement('h3');
        h3.textContent = day.date;
        let div = document.createElement('div');
        let hourly = document.querySelector('.hourly');
        let p = document.createElement('p');
        let para = document.createElement('p');
        let para2 = document.createElement('p');
        para2.textContent = `Wind speed: ${day.day.avgvis_km} km/h, Humidity: ${day.day.avghumidity} %, Chance of rain: ${day.day.daily_chance_of_rain} %, Chance of snow: ${day.day.daily_chance_of_snow} %`;
        para.textContent = `Sunrise: ${day.astro.sunrise}, Sunset: ${day.astro.sunset}, Conditions: ${day.day.condition.text}`;
        p.textContent = `Date: ${day.date}, Average temp: ${day.day.avgtemp_c} °C, Max temp: ${day.day.maxtemp_c} °C, Min temp: ${day.day.mintemp_c} °C`;
        let daily = document.querySelector('.daily');
        p.appendChild(para);
        p.appendChild(para2);
        daily.appendChild(p);
        hourly.appendChild(div);
        div.appendChild(h3);

        for(hour of day.hour) {
            console.log(hour.time, hour.temp_c);
            let p = document.createElement('p');
            p.textContent = `Date and time: ${hour.time}, Temperature: ${hour.temp_c} °C, ${hour.condition.text}`;
            p.classList.add('hour');
            let div = document.querySelector('.hourly');
            div.appendChild(p);
        }
    }
    
    console.log(sunrise);
    console.log(sunset);
    console.log(country);
};




fetchDetailedWeather();
const fetchWeather = (city) => {
let apiKey = '6ed13b8704e280c7b07c7f3594d5ffc1';
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city
        +"&units=metric&APPID=" 
        + apiKey)
        .then((response) => response.json())
        .then((data) => displayWeather(data))
};

// const displayCountry = (data) => {
//     const {country} = data.sys;
//     console.log(country);
//     document.querySelector('.country').innerText = `Country: ${country}`;
// };
// displayCountry();


 const displayWeather = (data) => {
        const {country} = data.sys;
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {lat} = data.coord;
        const {lon} = data.coord;
        // console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon +'@2x.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerHTML = `Temperature:  + ${temp}<span>&#8451;</span>`;
        document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}<span>&#37;</span>`;
        document.querySelector('.speed').textContent = `Wind Speed: ${speed} KM/H`;   
        document.querySelector('.country').innerText = `Country: ${country}`;
        document.querySelector('.coord').textContent = `Coordinates: Lat:${lat} + Lon:${lon};`
};      

const setBackground = () => {
        let containerBg = document.querySelector(".container");
        let description = document.querySelector(".description").innerText;
        switch(description) {
             case "light rain":
                 containerBg.style.backgroundImage = "url('assets/images/light-rain.jpg')";
                 break;
             case "snow":
                 containerBg.style.backgroundImage = "url('assets/images/snow.jpg')";
                 break;
            case "light snow":
                    containerBg.style.backgroundImage = "url('assets/images/light-snow.jpg')";
                    break;
             case "light intensity drizzle":
                 containerBg.style.backgroundImage = "url('assets/images/snow.jpg')";
                 break;
             default:
                 containerBg.style.backgroundImage = "url('assets/images/sunny.jpg')"
         }
         setTimeout(containerBg.setBackground, 500);
};

const search = () => {
        fetchWeather(document.querySelector('.search-bar').value);
        fetchDetailedWeather(document.querySelector('.search-bar').value);
};
    // setBackground: function() {
    //     let containerBg = document.querySelector(".container");
    //     if(weather.description === "light rain") {
    //         containerBg.style.backgroundImage = "url('assets/images/snow.jpg')";
    //     }
    // }


document.querySelector('button').addEventListener('click', () => {
    setBackground();
    search();
    
});

// const options = {
// 	method: 'GET',
//     type: 'CITY',
// 	headers: {
// 		'X-RapidAPI-Key': '11c2ba5c89msh04e9cbea46bbbadp16ac1ajsnf9171e5dbb5b',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

    // var city = 'San Francisco'
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://api.api-ninjas.com/v1/city?name=' + city,
    //     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    //     contentType: 'application/json',
    //     success: function(result) {
    //         console.log(result);
    //     },
    //     error: function ajaxError(jqXHR) {
    //         console.error('Error: ', jqXHR.responseText);
    //     }
    // });

// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.031 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }
  
//   window.initMap = initMap;

    


