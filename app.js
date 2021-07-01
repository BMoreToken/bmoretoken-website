const fs = require('fs')
var express = require('express');
var app = express();
// Load Header
var html_header = Object.create(null);
fs.readFile("header.html", "utf-8", function(error, data) {
  html_header = data.toString();
});
// Load Footer
var html_footer = Object.create(null);
fs.readFile("footer.html", "utf-8", function(error, data) {
  html_footer = data.toString();
});
// Routing 
app.all('/', function (req, res) {
  //let html = fs.createReadStream('metamask.html')
  res.send( html_header + 'Hello Home!' + html_footer );
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
// Start Server
app.listen(3000, function () {
  console.log('Listening to Port 3000');
});
