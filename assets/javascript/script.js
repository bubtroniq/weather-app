/* jshint esversion: 11 */

let mapGenerated = false;
let mymap, marker, results, countryCode, countryName;

const weatherContainer = document.querySelector("#container");
const mapContainer = document.querySelector("#map");
const forecast = document.querySelector('#forecast');
const apiKey = '6ed13b8704e280c7b07c7f3594d5ffc1';
const forecastBtn = document.querySelector('#forecast-btn');
const cntry = document.getElementById('cntry');
let table = document.querySelector('#table');
weatherContainer.classList.add("hide");
mapContainer.classList.add("hide");
//Fetching Data from weatherAPI
// Fetch 5day/3h interval forecast
function fetchForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + apiKey)
        .then((response) => {
            //Conditionals cheking for good/bad response
            if (!response.ok) {
                return response.text().then(text => document.querySelector('.error').innerText = "Can't find your city!");
            } else {
                return response.json();
            }
        })
        .then((data2) => showForecast(data2))
        //catch errors from bad user input
        .catch((error) => {
            console.log('ERROR is: ', error);
        });
}

// Fetch weather function
function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + apiKey)
        .then((response) => {
            //Conditionals cheking for good/bad response
            if (!response.ok) {
                return response.text().then(text => document.querySelector('.error').innerText = "Can't find your city!");
            } else {
                return response.json();
            }
        })
        .then((data) => showWeather(data))
        //catch errors from bad user input
        .catch((error) => {
            console.log('ERROR is: ', error);
        });
}

// Fetch weather callback function
function search() {
    let city = document.querySelector('input').value;
    if (city.includes(",")) {
        city = city.split(",")[0];
    }
    let countrySelect = document.getElementById("country");
    countryCode = countrySelect.value;
    countryName = countrySelect.options[countrySelect.selectedIndex].text;
    city = `${city}, ${countryName}`;
    fetchWeather(city);
    fetchForecast(city);
    if(cntry === "") {
        cntry.innerText = "Enter country for an accurate search";
    } else {
        cntry.innerText = '';
    }

    //catch errors from bad user input
    try {
        showWeather();
    } catch (error) {
        console.log('THIS ERROR is: ', error);
    }
}




// Event listener to display weather and location on map clicking search button
document.querySelector('#searchbtn').addEventListener('click', () => {
    let city = document.querySelector('input').value;
    //Conditionals for user feedback 
    if (city === '') {
        document.querySelector('.error').innerText = 'Enter a location';
    } else if (city !== '') {
        document.querySelector('.error').innerText = '';
        search();
    }

});


//Event listener to search on pressing Enter key
let input = document.querySelector('input');
input.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        document.querySelector('button').click();
    }
});

// Function to display weather on the page
function showWeather(data) {
// Destructuring objects
    const { lat: latitude, lon: longitude } = data.coord;
    const { country } = data.sys;
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;
// Hide weather and map container before search
    weatherContainer.classList.remove("hide");
    mapContainer.classList.remove("hide");
// Displaying weather data
    document.querySelector('.city').innerText = "Weather in " + name + ", " + countryName;
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerHTML = `Temperature:  + ${temp}<span> &#8451;</span>`;
    document.querySelector('.feels').innerHTML = `Feels like: ${feels_like}<span> &#8451;</span>`;
    document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}<span>&#37;</span>`;
    document.querySelector('.speed').textContent = `Wind Speed: ${speed} km/h`;
    document.querySelector('.country').innerText = `Country: ${country}`;
    document.querySelector('.coord').textContent = `Coordinates: Lat :${latitude} °, Lon: ${longitude} °`;

    

    // Displaying the map
    if (!mapGenerated) {
        generateMap();
    }

    // Add map marker at specified location
    addMarker(mymap, results, latitude, longitude);
}


function generateMap() {
    mapGenerated = true;
    mymap = L.map('map').setView([0, 0], 1);
    const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    results = L.layerGroup().addTo(mymap);
}
// Add marker on map
function addMarker(mymap, results, latitude, longitude) {
    // remove older markers first
    results.clearLayers();

    // Add map marker at specified location
    marker = L.marker([latitude, longitude]);
    results.addLayer(marker);
    L.marker([latitude, longitude]).addTo(mymap);
    mymap.setView([latitude, longitude], 11);
    marker.setLatLng([latitude, longitude]);
}
//function for displaying 5day/3h forecast
function showForecast(data2) {
    // Table template
    let htmlTable = `<thead>
    <tr>
      <th scope="col">Date & Time</th>
      <th scope="col">Min Temp</th>
      <th scope="col">Max Temp</th>
      <th scope="col">Forecast</th>
      <th scope="col">Description</th>
      <th scope="col">Icon</th>
    </tr>
  </thead>
  <tbody>`;
// Generating table row for each weather data interval
    data2.list.forEach(el => {
        htmlTable += `
        <tr>
            <td>${displayDate(el.dt_txt)}</td>
            <td>${el.main.temp_min} &#8451</td>
            <td>${el.main.temp_max} &#8451</td>
            <td>${el.weather[0].main}</td>
            <td>${el.weather[0].description}</td>
            <td><img src = 'https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png'></td>
         </tr>`;
    });
    table.innerHTML = htmlTable;
    forecast.style.display = 'block';
}
// Event listener for toggling hide class
forecastBtn.addEventListener('click', ()=> {
    table.classList.toggle('hide');
});
//function for Displaying date and hour
function displayDate(date) {
    let oldDate = new Date(date);

    const day = oldDate.getDate() < 10 ? '0' + oldDate.getDate().toString() : oldDate.getDate();
    let month = oldDate.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();
    const year = oldDate.getFullYear().toString();
    const hour = oldDate.getHours() < 10 ? "0" + oldDate.getHours().toString(): oldDate.getHours();

    const newDate = `<i class="fa-regular fa-calendar"></i>${day}/${month}/${year} -<i class="fa-regular fa-clock"></i>${hour}:00`;
    return newDate;

}

displayDate("2023-03-26 06:00:00");




// Function for changing background image regarding description value
//setBackground(description);
/*function setBackground(description) {
    let containerBg = document.querySelector("body");
    if (description.includes("cloud")) {
        containerBg.style.backgroundImage = "url('assets/images/scattered-clouds.jpg')";
    } else if (description.includes("snow")) {
        containerBg.style.backgroundImage = "url('assets/images/snow.jpg')";
    } else if (description.includes("rain") || description.includes("mist")) {
        containerBg.style.backgroundImage = "url('assets/images/light-rain.jpg')";
    } else {
        containerBg.style.backgroundImage = "url('assets/images/sunny.jpg')";
    }
}*/