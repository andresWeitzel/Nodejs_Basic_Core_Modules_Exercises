# Nodejs Basic Core Modules Exercises
Basic nodejs core modules exercises.
* [Oficial documentation](https://nodejs.org/docs/latest/api/http.html)

 <br>

<!------Start Index----->

## Index 📜

<details>
 <summary> See </summary>
 <br>
  
 ### HTTP / HTTPS
* [Make a simple request to a host.](#write-a-javascript-program-to-copy-a-string-to-an-empty-string-)
 
<br>

</details>

<!------Stop Index----->

<br>

<br>

## HTTP / HTTPS

### Make a simple request to a host [🔝](#index-)
<details>
  <summary>See solution</summary>
 <br>

* [HTTP oficial Nodejs](https://nodejs.org/docs/latest/api/http.html#new-agentoptions)
* [HTTP complete Guide](https://www.memberstack.com/blog/node-http-request)

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


