const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
 'apiToken': '3AC00ABE68930CDA275A7A850609F58B924444C4' 
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  

var config = {
  method: 'post',
  url: 'https://api.beta.twikey.com/creditor',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
});