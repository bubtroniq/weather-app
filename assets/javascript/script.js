
//Check fetch function
const checkFetch = (response) => {
    if (!response.ok) {
        document.querySelector('.error').innerText = "Can't find your city!";
    }
    return response;
};

//Fetching Data from weatherAPI
const fetchWeather = (city) => {
    const apiKey = '6ed13b8704e280c7b07c7f3594d5ffc1';
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + apiKey)
        .then(checkFetch)
        .then((response) => response.json())
        .then((data) => {
            showWeather(data);
            displayMap(data);
        })
        //catch errors from bad user input
        .catch((error) => {
            console.log('ERROR is: ', error);
        });
};

// Fetch weather callback function
const search = () => {
    let city = document.querySelector('input').value;
    fetchWeather(city);

    //catch errors from bad user input
    try {
        showWeather();
    } catch (error) {
        console.log('THIS ERROR is: ', error);
    }
};




// Event listener to display weather and location on map clicking search button
document.querySelector('button').addEventListener('click', () => {
    let city = document.querySelector('input').value;
    //Conditionals for user feedback 
    if (city === '') {
        document.querySelector('.error').innerText = 'You must enter a location';
    } else if (city !== '') {
        document.querySelector('.error').innerText = '';
        search();
        displayMap();
    }

});


//Event listener to search on pressing Enter key
let input = document.querySelector('input');
input.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        document.querySelector('button').click();
    }
});
// Displaying the map
const displayMap = (data) => {
    try{
    const { lat: latitude, lon: longitude } = data.coord;
    const mymap = L.map('map').setView([0, 0], 1);
    const marker = L.marker([0, 0]).addTo(mymap);

    const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    //L.map.removeLayer(marker);
    //Add map marker at specified location
    L.marker([latitude, longitude]).addTo(mymap);
    mymap.setView([latitude, longitude], 13);
    marker.setLatLng([latitude, longitude]);
    } catch(error) {
        console.log(error);
    }
    
};


// Function to display weather on the page
const showWeather = (data) => {
    const { lat: latitude, lon: longitude } = data.coord;
    const { country } = data.sys;
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;

    document.querySelector('.city').innerText = "Weather in " + name;

    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.querySelector('.description').innerText = description;

    document.querySelector('.temp').innerHTML = `Temperature:  + ${temp}<span> &#8451;</span>`;

    document.querySelector('.feels').innerHTML = `Feels like: ${feels_like}<span> &#8451;</span>`;

    document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}<span>&#37;</span>`;

    document.querySelector('.speed').textContent = `Wind Speed: ${speed} km/h`;

    document.querySelector('.country').innerText = `Country: ${country}`;

    document.querySelector('.coord').textContent = `Coordinates: Lat :${latitude} °, Lon: ${longitude} °`;


    // Function for changing background image regarding description value
    const setBackground = () => {
        let containerBg = document.querySelector("body");
        // console.log(description);
        switch (description) {
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
            case "broken clouds":
                containerBg.style.backgroundImage = "url('assets/images/broken-clouds.jpg')";
                break;
            case "scattered clouds":
                containerBg.style.backgroundImage = "url('assets/images/scattered-clouds.jpg')";
                break;
            default:
                containerBg.style.backgroundImage = "url('assets/images/sunny.jpg')";
        }

    };
    //Calling setBackground function
    setBackground();

    // Displaying the map
    // const mymap = L.map('map').setView([0, 0], 1);
    // const marker = L.marker([0, 0]).addTo(mymap);

    // const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    // const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // const tiles = L.tileLayer(tileUrl, { attribution });
    // tiles.addTo(mymap);
    // //Add map marker at specified location
    // L.marker([latitude, longitude]).addTo(mymap);
    // mymap.setView([latitude, longitude], 13);
    // marker.setLatLng([latitude, longitude]);
};



