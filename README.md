# Nodejs Basic Core Modules Exercises
Basic nodejs core modules exercises.
* [Oficial documentation](https://nodejs.org/docs/latest/api/http.html)

 <br>

<!------Start Index----->

## Index 📜

<details>
 <summary> See </summary>
 <br>
  
### HTTP
* [Make a simple request to a host with http.](#write-a-javascript-program-to-copy-a-string-to-an-empty-string-)

### HTTPS
* [Make a simple request to a host with https.](#write-a-javascript-program-to-copy-a-string-to-an-empty-string-)

 
<br>

</details>

<!------Stop Index----->

<br>

<br>

## HTTP 

### Make a simple request to a host with http [🔝](#index-)
<details>
  <summary>See solution</summary>
 <br>

* [HTTP oficial Nodejs](https://nodejs.org/docs/latest/api/http.html#new-agentoptions)

#### Code
 ```js
//External
const http = require('node:http');
//Const
const URL = 'https://randomuser.me/api/';


http.get(URL, (resp) => {
  let data = '';
 // A fragment of data has been received.
 resp.on('data', (chunk) => {
   data += chunk;
 });
 // All response has been received. Print the result.
 resp.on('end', () => {
   console.log(JSON.parse(data).results);
 });

}).on("error", (err) => {
 console.log("Error: " + err.message);
});

 ```

#### Console
 ```js
gender:"male"
name:(3) {title: "Mr", first: "Umut", last: "...}
location:(7) {street: {...}, city: "Sinop", state...}
email:"umut.elicin@example.com"
login:(7) {uuid: "e5c94bb9-33a3-4c93-ab03-76a1...}
dob:(2) {date: "1966-03-19T20:36:13.730Z", a...}
registered:(2) {date: "2015-11-17T23:39:48.965Z", a...}
phone:"(043)-991-7267"
cell:"(378)-344-6626"
id:(2) {name: "", value: null}
picture:(3) {large: "https://randomuser.me/api/p...}
nat:"TR"
[[Prototype]]:{}
 ```

<br>

</details>

<br>

<br>

## HTTPS 

### Make a simple request to a host with https [🔝](#index-)
<details>
  <summary>See solution</summary>
 <br>

* [HTTP oficial Nodejs](https://nodejs.org/docs/latest/api/http.html#new-agentoptions)
* [HTTP complete Guide](https://www.memberstack.com/blog/node-http-request)
* [Other Guide](https://www.geeksforgeeks.org/https-in-node-js/)

#### Code
 ```js
//External
const https = require('https');
//Const
const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

https.get(URL, (resp) => {
 let data = '';

 // A fragment of data has been received.
 resp.on('data', (chunk) => {
   data += chunk;
 });

 // All response has been received. Print the result.
 resp.on('end', () => {
   console.log(JSON.parse(data).explanation);
 });

}).on("error", (err) => {
 console.log("Error: " + err.message);
});
 ```

#### Console
 ```js
Asteroid 319 Leona cast a shadow across planet Earth on December 12, as it passed in front of bright star Betelgeuse. But to see everyone's favorite red giant star fade this time, you had to stand near the center line of the narrow shadow path starting in central Mexico and extending eastward across southern Florida, the Atlantic Ocean, southern Europe, and Eurasia. The geocentric celestial event was captured in these two panels taken at Almodovar del Rio, Spain from before (left) and during the asteroid-star occultation. In both panels Betelgeuse is seen above and left, at the shoulder of the familiar constellation Orion. Its brightness diminishes noticeably during the exceedingly rare occultation when, for several seconds, the giant star was briefly eclipsed by a roughly 60 kilometer diameter main-belt asteroid.
 ```

<br>

</details>
