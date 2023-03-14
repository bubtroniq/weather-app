//Fetching Data from weatherAPI

let city = document.getElementsByTagName('input').innerText;
const fetchWeather = (city) => {
    const apiKey = '6ed13b8704e280c7b07c7f3594d5ffc1';
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city
        + "&units=metric&APPID="
        + apiKey)
        .then((response) => response.json())
        .then((data) => showWeather(data));

};

// Function to display weather on the page 
const showWeather = (data) => {
    const { lat: latitude, lon: longitude } = data.coord;
    const { country } = data.sys;
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;


 



    // console.log(data, name, icon, description, temp, humidity, speed, latitude, longitude);
    document.querySelector('.city').innerText = "Weather in " + name;

    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.querySelector('.description').innerText = description;

    document.querySelector('.temp').innerHTML = `Temperature:  + ${temp}<span> &#8451;</span>`;

    document.querySelector('.feels').innerHTML = `Feels like: ${feels_like}<span> &#8451;</span>`

    document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}<span>&#37;</span>`;

    document.querySelector('.speed').textContent = `Wind Speed: ${speed} km/h`;

    document.querySelector('.country').innerText = `Country: ${country}`;

    document.querySelector('.coord').textContent = `Coordinates: Lat :${latitude} °, Lon: ${longitude} °`;

    // Function for changing background image regarding description value

    const setBackground = () => {
        let containerBg = document.querySelector("body");
        // console.log(description);
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
            case "broken clouds":
                 containerBg.style.backgroundImage = "url('assets/images/broken-clouds.jpg')";
                 break;
            case "scattered clouds":
                containerBg.style.backgroundImage = "url('assets/images/scattered-clouds.jpg')";
                break;
            default:
                 containerBg.style.backgroundImage = "url('assets/images/sunny.jpg')"
         }
        //  setTimeout(containerBg.setBackground, 2000);
         
    };

    setBackground();






    //Displaying the map
    const mymap = L.map('map').setView([0, 0], 1);
    const marker = L.marker([0, 0]).addTo(mymap);

    const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);



    L.marker([latitude, longitude]).addTo(mymap);
    mymap.setView([latitude, longitude], 13);
    marker.setLatLng([latitude, longitude]);
}

// Fetch weather callback function

const search = () => {
    fetchWeather(document.querySelector('input').value);
};




// Event listener to display weather and location on map clicking search button
document.querySelector('button').addEventListener('click', () => {
    search();
    showWeather();
    setBackground()
});


//Event listener to search on pressing Enter key

let input = document.querySelector('input');
input.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        document.querySelector('button').click();
    }
})

