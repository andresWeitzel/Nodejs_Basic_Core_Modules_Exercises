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