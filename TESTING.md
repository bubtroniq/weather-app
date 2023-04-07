# Testing


## Code Validation


### HTML
- No errors or warnings were found when passing through the [W3C Markup Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fweather-app-bubtroniq.vercel.app%2F).
![screenshot](documentation/html-validation.jpg)


### CSS
- No errors or warnings were found when passing through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
![screenshot](documentation/css-validation.jpg)

### JS
- One undefined variable L, it is from leafletJS map.
![screenshot](documentation/jsint-validation.jpg)


## Browser Compatibility

| Device | Screenshot | Notes |
| --- | --- | --- |
| Chrome  | ![screenshot](documentation/chrome-desktop1.jpg) | Works as expected |
| Chrome  | ![screenshot](documentation/chrome-desktop2.jpg) | Works as expected |
| Chrome  | ![screenshot](documentation/chrome-desktop3.jpg) | Works as expected |
| Firefox  | ![screenshot](documentation/chrome-desktop1.jpg) | Works as expected |
| Firefox  | ![screenshot](documentation/chrome-desktop2.jpg) | Works as expected |
| Firefox  | ![screenshot](documentation/chrome-desktop3.jpg) | Works as expected |
| Brave  | ![screenshot](documentation/brave-desktop1.jpg) | Works as expected |
| Brave  | ![screenshot](documentation/brave-desktop2.jpg) | Works as expected |
| Brave  | ![screenshot](documentation/brave-desktop3.jpg) | Works as expected |

## Responsiveness

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (Samsung A33) | ![screenshot](documentation/mobile.jpg) | Works as expected |
| Mobile (Samsung A33) | ![screenshot](documentation/mobile1.jpg) | Works as expected |
| Mobile (Samsung A33) | ![screenshot](documentation/mobile2.jpg) | Works as expected |
| Mobile (Samsung A33) | ![screenshot](documentation/mobile3.jpg) | Works as expected |
| Mobile (Samsung A33) | ![screenshot](documentation/mobile4.jpg) | Works as expected |
| Mobile (Samsung A33) | ![screenshot](documentation/mobile5.jpg) | Works as expected |
| Tablet (Samsung S8+) | ![screenshot](documentation/tablet-view3.jpg) | Works as expected |
| Tablet (Samsung S8+) | ![screenshot](documentation/tablet-view2.jpg) | Works as expected |
| Tablet (Samsung S8+) | ![screenshot](documentation/tablet-view1.jpg) | Works as expected |
| Chrome Mobile (DevTools) | ![screenshot](documentation/chrome-mobile1.jpg) | Works as expected |
| Chrome Mobile (DevTools) | ![screenshot](documentation/chrome-mobile2.jpg) | Works as expected |
| Chrome Mobile (DevTools) | ![screenshot](documentation/chrome-mobile3.jpg) | Works as expected |
| Firefox Mobile (DevTools) | ![screenshot](documentation/firefox-mobile1.jpg) | Works as expected |
| Firefox Mobile (DevTools) | ![screenshot](documentation/firefox-mobile2.jpg) | Works as expected |
| Firefox Mobile (DevTools) | ![screenshot](documentation/firefox-mobile3.jpg) | Works as expected |
| Brave Mobile (DevTools) | ![screenshot](documentation/brave-mobile1.jpg) | Works as expected |
| Brave Mobile (DevTools) | ![screenshot](documentation/brave-mobile2.jpg) | Works as expected |
| Brave Mobile (DevTools) | ![screenshot](documentation/brave-mobile3.jpg) | Works as expected |
| Chrome Tablet (DevTools) | ![screenshot](documentation/chrome-tablet1.jpg) | Works as expected |
| Chrome Tablet (DevTools) | ![screenshot](documentation/chrome-tablet2.jpg) | Works as expected |
| Chrome Tablet (DevTools) | ![screenshot](documentation/chrome-tablet3.jpg) | Works as expected |
| Firefox Tablet (DevTools) | ![screenshot](documentation/firefox-tablet1.jpg) | Works as expected |
| Firefox Tablet (DevTools) | ![screenshot](documentation/firefox-tablet2.jpg) | Works as expected |
| Firefox Tablet (DevTools) | ![screenshot](documentation/firefox-tablet3.jpg) | Works as expected |
| Brave Tablet (DevTools) | ![screenshot](documentation/brave-tablet1.jpg) | Works as expected |
| Brave Tablet (DevTools) | ![screenshot](documentation/brave-tablet2.jpg) | Works as expected |
| Brave Tablet (DevTools) | ![screenshot](documentation/brave-tablet3.jpg) | Works as expected |
| Chrome Desktop | ![screenshot](documentation/chrome-desktop1.jpg) | Works as expected |
| Chrome Desktop | ![screenshot](documentation/chrome-desktop2.jpg) | Works as expected |
| Chrome Desktop | ![screenshot](documentation/chrome-desktop3.jpg) | Works as expected |
| Firefox Desktop | ![screenshot](documentation/chrome-desktop1.jpg) | Works as expected |
| Firefox Desktop | ![screenshot](documentation/chrome-desktop2.jpg) | Works as expected |
| Firefox Desktop | ![screenshot](documentation/chrome-desktop3.jpg) | Works as expected |
| Brave Desktop | ![screenshot](documentation/brave-desktop1.jpg) | Works as expected |
| Brave Desktop | ![screenshot](documentation/brave-desktop2.jpg) | Works as expected |
| Brave Desktop | ![screenshot](documentation/brave-desktop3.jpg) | Works as expected |



## Lighthouse Audit
### Desktop Lighthouse audit
![screenshot](documentation/lighthouse-desktop.jpg)
### Mobile Lighthouse audit 
![screenshot](documentation/lighthouse-mobile.jpg)


## Bugs

- Alot of trial and error fetching both API's and displaying data on the go modifying DOM structure. - fixed/practicing fetch API data and destructuring objects + DOM manipulation practice and inspiration.
- Had to setTimeout() on the changeBackground function to fix background picture in one click, otherwise 2 clicks required in order to set the proper background, defined in switch statement. - fixed/used includes() method on description object with if else statements to change background picture, was working but gave up on the ideea because of contrast issues.
- Lots of issues with retrievieng coordinates from data object. - fixed/practicing fetch API data and destructuring objects + DOM manipulation practice and inspiration.
- After first search map is not updating with new coordinates. - fixed/defined a function to generate map, for second+ searches a clearLayers method will clear previous map view and will set new marker and map view to new fetched coords.
- Alot of errors to be managed when fetching API data. - fixed/catch errors with "try, catch syntax"
- Background picture that is changing regarding description message needs fixing on mobile view.-fixed/no background picture anymore.

## Unfixed Bugs

- Markers from previous searches will remain pinned on map. - not fixed, minor bug not affecting functionality or UI


Return to the [README.md](README.md) file.