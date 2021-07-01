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
  var html_main = Object.create(null);
  fs.readFile("tools.html", "utf-8", function(error, data) {
    html_main = data.toString();
  });
  res.send( html_header + html_main + html_footer );
});
app.all('/metamask', function (req, res) {
  var html_main = Object.create(null);
  fs.readFile("metamask.html", "utf-8", function(error, data) {
    html_main = data.toString();
  });
  res.send(html_header + html_main + html_footer);
});
app.all('/bulksender', function (req, res) {
  var html_main = Object.create(null);
  fs.readFile("bulksender.html", "utf-8", function(error, data) {
    html_main = data.toString();
  });
  res.send(html_header + html_main + html_footer);
});
app.all('/events', function (req, res) {
  var html_main = Object.create(null);
  fs.readFile("calendar.html", "utf-8", function(error, data) {
    html_main = data.toString();
  });
  res.send(html_header + html_main + html_footer);
});
// Start Server
app.listen(3000, function () {
  console.log('Listening to Port 3000');
});
