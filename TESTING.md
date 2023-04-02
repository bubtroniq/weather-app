# Testing

Return back to the [README.md](README.md) file.


## Code Validation


### HTML
- No errors or warnings were found when passing through the [W3C Markup Validator](https://validator.w3.org/).
![screenshot](documentation/html-validation.jpg)


### CSS
- No errors or warnings were found when passing through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
![screenshot](documentation/css-validation.jpg)

### JS
- One undefined variable L, it is from leafletJS map.
![screenshot](documentation/jsint-validation.jpg)


## Browser Compatibility

## Responsiveness



## Lighthouse Audit
### Desktop Lighthouse audit
![screenshot](documentation/lighthouse-desktop.jpg)
### Mobile Lighthouse audit 
![screenshot](documentation/lighthouse-mobile.jpg)


## User Story Testing


## Bugs


- Alot of trial and error fetching both API's and displaying data on the go modifying DOM structure. - fixed/practicing fetch API data and destructuring objects + DOM manipulation practice and inspiration.
- Had to setTimeout() on the changeBackground function to fix background picture in one click, otherwise 2 click requierd in order to set the proper background definded in switch statement. - fixed/no more background picture
- Lots of issues with retrievieng coordinates from data object. - fixed/practicing fetch API data and destructuring objects + DOM manipulation practice and inspiration.
- After first search map is not updating with new coordinates. - fixed/defined a function to generate map, for second+ searches a clearLayers method will clear previous map view and will set new marker and map view to new fetched coords.
- Alot of errors to be managed when fetching API data. - fixed/catch errors with "try, catch syntax"
- Background picture that is changing regarding description message needs fixing on mobile view.-fixed/no background picture anymore
- On second+ search map is not updating the new location. - fixed
- Markers from previous searches will remain pinned on map. - not fixed, minor bug not affecting functionality or UI



### GitHub **Issues**



## Unfixed Bugs

- Markers from previous searches will remain pinned on map. - not fixed, minor bug not affecting functionality or UI
