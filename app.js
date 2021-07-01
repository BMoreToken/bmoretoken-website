const fs = require('fs')
var express = require('express');
var app = express();

let html_header = fs.createReadStream('header.html')
let html_footer = fs.createReadStream('footer.html')

app.all('/', function (req, res) {
  //let html = fs.createReadStream('metamask.html')
  html_header.pipe(res);
  res.send('Hello Home!');
  html_footer.pipe(res)
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




