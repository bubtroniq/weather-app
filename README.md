# Weather App

Weather App is a simple and responsive  website where the user can find weather information like temperature, wind speed, humidity, location displayed on a map for better orientation, all this in real time.

Weather App is intended for any kind of user who wants to find weather and location information for a specific location using the text input, selecting the country for an accurate search and the search button at the top.
Weather App it is very easy to use with a simple and intuitive design.
[Live Page HERE](https://weather-app-bubtroniq.vercel.app/)
![screenshot](documentation/mockup.jpg)

## UX

A simple, yet modern design, wich contains an h1 element as title, an input element, a country select element and a search button at the top of the page and a footer at the bottom in the first phase.
After inserting a location in the text input, choosing country and click search, two more divs will be added. First div contains weather data, second div contains a map with the location pinned.
Under the weather data information is a 5day/3h interval forecast button, when clicked, under the map will generate an html table with weather forecast data for every 3h for 5 days.

### Colour Scheme
Simple and with a good contrast color scheme.

- `#FFFF00` used for heading and forecast text and also for alert mesages.
- `#fff` used for weather info text and buttons background.
- `#000` default font color, for user input text and country select.
- `#3b93db` used as background for body.

I used [coolors.co](https://coolors.co/f9ed9f-ffffff-000000-1a68c7) to generate my colour palette.
![screenshot](documentation/color-pallete.jpg)


### Typography
- [Nunito](https://fonts.google.com/specimen/Nunito) a not very popular font, imported from google fonts.

## User Stories

### New Site Users
- As a new site user, I want to easily understand the main purpose of the site so that I can quickly decide whether I want to explore it more.
- As a new site user, I would like to be able to find information about weather in a specific location.
- As a new site user, I want to check their social media so that I can determine whether they are trustworthy.

### Returning Site Users
- As a returning site user, I would like to find weather information easy, accurate and fast.

### Site Admin
- As a site administrator, I should be able to help users find detailed weather information for the location they are looking for.

## Wireframes
### Mobile Wireframes
![screenshot](documentation/mobile-wireframe.png)
### Tablet Wireframes
![screenshot](documentation/tablet-wireframe.png)
### Desktop Wireframes
![screenshot](documentation/desktop-wireframe.png)

## Features
### Existing Features

- **Feature #1** 
First feature contains a title, a search box, a country select element and a search button allowing users to search weather information based on city and country name.
![screenshot](documentation/feature-1.jpg)

- **Feature #2**
Feature two consists in displaying weather information and a button with a 5 day forecast, and based on location searched, on the map will be pinned that city, elements being generated based on search action.
![screenshot](documentation/feature-2.jpg)

- **Feature #3**
Feature three cosnsists of a button that when is pressed will display a 5day/3h interval weather forecast.
Based on data received from API, a table is generated with javascript and detailed weather info is displayed.
![screenshot](documentation/feature-3.jpg)

- **Feature #4**
Feature four consits in a footer with font awesome icons and links to external pages/social media.
![screenshot](documentation/feature-4.jpg)

## Tools & Technologies Used
Technologies used to build this website are:
- [HTML](https://en.wikipedia.org/wiki/HTML) used for the site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the site design and layout.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [VsCode](https://en.wikipedia.org/wiki/CSS) used for local development.
- [Google Chrome](https://en.wikipedia.org/wiki/CSS) web browser used for Developer Tools and Console.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [Tim Nelson](https://traveltimn.github.io/readme-builder) used to help generate the Markdown files.
- [Balsamiq](https://balsamiq.com/wireframes/) used to create wireframes for this website
- [Vercel](https://vercel.com/) used for hosting the deployed site.



## Deployment

The site was deployed to Vercel, a free hosting platform. The steps to deploy are as follows:
- In the Vercel dashboard you can link your [GitHub account](https://github.com/bubtroniq/weather-app) and a [GitHub repository](https://github.com/bubtroniq/weather-app) and deploy in one click with autoupdate for each change.
![screenshot](documentation/vercel.jpg)

The live link can be found [here](weather-app-bubtroniq.vercel.app)
### Local Deployment
This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/bubtroniq/weather-app) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/bubtroniq/weather-app`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/bubtroniq/weather-app)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).


#### Forking
By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/bubtroniq/weather-app)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!


### Local VS Deployment
There is no difference between local version and the live deployed site.



## Credits
| Source | Location | Notes |
| --- | --- | --- |
| [Tim Nelson](https://traveltimn.github.io/readme-builder) | README and TESTING | tool to help generate the Markdown files |
| [YouTube](https://www.youtube.com/watch?v=WZNG8UomjSI) | main page | weather app tutorial used for inspiration|
| [YouTube](https://www.youtube.com/watch?v=NyjMmNCtKf4) | main page | tutorial for leafletJS map|
| [YouTube](https://www.youtube.com/watch?v=G4T2ZgJPKbw) | main page | destructuring objects in JavaScript |
| [YouTube](https://www.youtube.com/watch?v=tc8DU14qX6I) | main page | tutorial for fetching API data|

### Media

Icons and API used in project.

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Font Awesome](https://fontawesome.com/) | main page| icons | calendar and clock icons in forecast table |
| [OpenWeatherMap Icons](https://openweathermap.org/weather-conditions#How-to-get-icon-URL) | main page| icons | icon in current weather info and icons in forecast interval table data |
| [OpenWeatherMap OneCall API](https://openweathermap.org/api/one-call-3) | main page| icons | icon in current weather info and icons in forecast interval table data |
| [OpenWeatherMap OneCall API](https://openweathermap.org/api/one-call-3) | main page| weather info | current weather info |
| [OpenWeatherMap 5 day 3 hour forecast data API](https://openweathermap.org/forecast5) | main page| weather info | 5day/3h interval forecast table data |
| [LeafletJS Map](https://leafletjs.com/) | main page| location info | displaying location with a marker on leafletJS map |



### Acknowledgements
- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN/ci-ifd-lead) for his patience, support and suggestions throughout the development of this project.
- I would like to thank my coleagues from Newcastle College, for ideas and suggestions towards developing this project.


Go to the to the [TESTING.md](TESTING.md) file.
