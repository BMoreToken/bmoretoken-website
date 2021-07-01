const fs = require('fs')
var express = require('express');
var app = express();

let html_header = fs.createReadStream('header.html')
let html_footer = fs.createReadStream('footer.html')

app.all('/', function (req, res) {
  //let html = fs.createReadStream('metamask.html')
  res.send(html_header + 'Hello Home!' + html_footer);
});
app.all('/metamask', function (req, res) {
  //let html = fs.createReadStream('metamask.html')
  res.send(html_header + 'Hello MetaMask!' + html_footer);
});
app.all('/bulksender', function (req, res) {
  //let html = fs.createReadStream('metamask.html')
  res.send(html_header + 'Hello BulkSender!' + html_footer);
});
app.all('/events', function (req, res) {
  //let html = fs.createReadStream('metamask.html')
  res.send(html_header + 'Hello Events!' + html_footer);
});



app.listen(3000, function () {
  console.log('Listening to Port 3000');
});





/*
var express = require('express')
var app = express()
const http = require('http')
const fs = require('fs')

var metamask = function (req, res, next) {
  fs.createReadStream('metamask.html').pipe(res)
  next()
}


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('header.html').pipe(res)
  
  fs.createReadStream('footer.html').pipe(res)
})
server.listen(process.env.PORT || 3000)

*/





/*

const server = http.createServer((req, res, next) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('header.html').pipe(res)
  //print('1').pipe(res)
  app.get(/metamask/, function (req, res) {  
    //print('2').pipe(res)
    //res.send(fs.createReadStream('calendar.html'))
    //fs.createReadStream('metamask.html').pipe(res)
  })
 // res.send('2')
  app.get(/bulksender/, function (req, res) {
   // res.send('hello bulksender')
    //res.send(fs.createReadStream('calendar.html'))
    //fs.createReadStream('bulksender.html').pipe(res)
  })
 // res.send('3')
  app.get(/events/, function (req, res) {
    //res.send('hello events')
    //res.send(fs.createReadStream('calendar.html'))
    //fs.createReadStream('calendar.html').pipe(res)
  })
 // res.send('4')
  fs.createReadStream('footer.html').pipe(res)
})
server.listen(process.env.PORT || 3000)
*/



/*
app.get(/metamask/, function (req, res) {  
  const http = require('http')
  const fs = require('fs')
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('header.html').pipe(res)
    fs.createReadStream('metamask.html').pipe(res)
    fs.createReadStream('footer.html').pipe(res)
  })
  server.listen(process.env.PORT || 3000)
}
app.get(/bulksender/, function (req, res) {  
  const http = require('http')
  const fs = require('fs')
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('header.html').pipe(res)
    fs.createReadStream('bulksender.html').pipe(res)
    fs.createReadStream('footer.html').pipe(res)
  })
  server.listen(process.env.PORT || 3000)
}
app.get(/events/, function (req, res) {  
  const http = require('http')
  const fs = require('fs')
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('header.html').pipe(res)
    fs.createReadStream('calendar.html').pipe(res)
    fs.createReadStream('footer.html').pipe(res)
  })
  server.listen(process.env.PORT || 3000)
}
*/
