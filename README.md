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
* [Make a simple request to a host with http.](#make-a-simple-request-to-a-host-with-http-)

### HTTPS
* [Make a simple request to a host with https.](#make-a-simple-request-to-a-host-with-https-)

 
<br>

</details>

<!------Stop Index----->

<br>

<br>


## Project execution [🔝](#index-)

<details>
  <summary>See</summary>
<br>

*   Once a work environment has been created through some IDE, we clone the project

```git
git clone https://github.com/andresWeitzel/Nodejs_Basic_Core_Modules_Exercises
```

*   We position ourselves on the project

```git
cd 'projectName'
```

*   We install the latest LTS version of [Nodejs(v18)](https://nodejs.org/en/download)

*   We install all the necessary packages

```git
npm i
```

* We execute the file we want and verify the result through the console

```git
node src/directory/filename.js
```


<br>

<br>

## HTTP 

### Make a simple request to a host with http [🔝](#index-)
<details>
  <summary>See solution</summary>
 <br>

* [HTTP oficial Nodejs](https://nodejs.org/docs/latest/api/http.html#new-agentoptions)
* [Guide Example](https://www.geeksforgeeks.org/how-to-make-http-requests-in-node-js/)

#### Code
 ```js
//External
const http = require('http');
//Const   
// Setting the configuration for the request 
const options = { 
    hostname: 'jsonplaceholder.typicode.com', 
    path: '/posts', 
    method: 'GET'
}; 
    
// Sending the request 
const req = http.request(options, (res) => { 
    let data = ''
     
    res.on('data', (chunk) => { 
        data += chunk; 
    }); 
    
    // Ending the response  
    res.on('end', () => { 
        console.log('Body:', JSON.parse(data)) 
    }); 
       
}).on("error", (err) => { 
    console.log("Error: ", err) 
}).end()

 ```

#### Console
 ```js
{
    userId: 9,
    id: 89,
    title: 'sint soluta et vel magnam aut ut sed qui',
    body: 'repellat aut aperiam totam temporibus autem et\n' +
      'architecto magnam ut\n' +
      'consequatur qui cupiditate rerum quia soluta dignissimos nihil iure\n' +
      'tempore quas est'
  },
  {
    userId: 9,
    id: 90,
    title: 'ad iusto omnis odit dolor voluptatibus',
    body: 'minus omnis soluta quia\n' +
      'qui sed adipisci voluptates illum ipsam voluptatem\n' +
      'eligendi officia ut in\n' +
      'eos soluta similique molestias praesentium blanditiis'
  },
  {
    userId: 10,
    id: 91,
    title: 'aut amet sed',
    body: 'libero voluptate eveniet aperiam sed\n' +
      'sunt placeat suscipit molestias\n' +
      'similique fugit nam natus\n' +
      'expedita consequatur consequatur dolores quia eos et placeat'
  },
  {
    userId: 10,
    id: 92,
    title: 'ratione ex tenetur perferendis',
    body: 'aut et excepturi dicta laudantium sint rerum nihil\n' +
      'laudantium et at\n' +
      'a neque minima officia et similique libero et\n' +
      'commodi voluptate qui'
  },
  {
    userId: 10,
    id: 93,
    title: 'beatae soluta recusandae',
    body: 'dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\n' +
      'voluptatem quis enim recusandae ut sed sunt\n' +
      'nostrum est odit totam\n' +
      'sit error sed sunt eveniet provident qui nulla'
  },
  {
    userId: 10,
    id: 94,
    title: 'qui qui voluptates illo iste minima',
    body: 'aspernatur expedita soluta quo ab ut similique\n' +
      'expedita dolores amet\n' +
      'sed temporibus distinctio magnam saepe deleniti\n' +
      'omnis facilis nam ipsum natus sint similique omnis'
  },
  {
    userId: 10,
    id: 95,
    title: 'id minus libero illum nam ad officiis',
    body: 'earum voluptatem facere provident blanditiis velit laboriosam\n' +
      'pariatur accusamus odio saepe\n' +
      'cumque dolor qui a dicta ab doloribus consequatur omnis\n' +
      'corporis cupiditate eaque assumenda ad nesciunt'
  },
  {
    userId: 10,
    id: 96,
    title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi',
    body: 'in non odio excepturi sint eum\n' +
      'labore voluptates vitae quia qui et\n' +
      'inventore itaque rerum\n' +
      'veniam non exercitationem delectus aut'
  },
  {
    userId: 10,
    id: 97,
    title: 'quas fugiat ut perspiciatis vero provident',
    body: 'eum non blanditiis soluta porro quibusdam voluptas\n' +
      'vel voluptatem qui placeat dolores qui velit aut\n' +
      'vel inventore aut cumque culpa explicabo aliquid at\n' +
      'perspiciatis est et voluptatem dignissimos dolor itaque sit nam'
  },
  {
    userId: 10,
    id: 98,
    title: 'laboriosam dolor voluptates',
    body: 'doloremque ex facilis sit sint culpa\n' +
      'soluta assumenda eligendi non ut eius\n' +
      'sequi ducimus vel quasi\n' +
      'veritatis est dolores'
  },
....
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
