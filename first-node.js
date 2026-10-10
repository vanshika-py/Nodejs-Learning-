//How to run on server locally//

// const http = require("http");

// const server = http.createServer((req, res) =>{

//  res.writeHead(200, {'content-type': 'text/html'});
//  res.write("<h1>This is my first node code</h1>");
//  res.write("<button>hi! This is vanshika</button>");
//  res.end("This is the ending of my code.");

// });

// server.listen("666");

const myfunc = require('./my-first-mod');

const avg = myfunc(12, 45, 60);

console.log("avg is", avg);