let q = "telford";

const fetchDetailedWeather = () => {
fetch("http://api.weatherapi.com/v1/current.json?key=4a95f442039e45748c1235242231003&q=" + q + "&aqi=no&alerts=yes")
.then((response) => response.json())
.then((data) => displayDetailedWeather(data))
}

const displayDetailedWeather = (data) => {
    const {name, country, region} = data.location;
  ;
    document.querySelector('.name').textContent = name;
    document.querySelector('.country2').textContent = country;
    document.querySelector('.region').textContent = region;
}


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
        document.querySelector('.speed').textContent = `Speed: ${speed} KM/H`;   
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

    