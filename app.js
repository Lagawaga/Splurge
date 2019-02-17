/*

var http = require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200, {'Content-type': 'text/html'});
	response.write("<html><body><h1>");
	response.end("Splurge");
});

server.listen(8000);

console.log("Server is running...");

*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})
app.post('/', function (req, res) {
  console.log(req.body);
  res.render('index');  
})
app.listen(3000, function () {
  console.log('app listening on port 3000...')
})