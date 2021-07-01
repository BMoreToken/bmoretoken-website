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
// Tools Index
var html_tools = Object.create(null);
fs.readFile("tools.html", "utf-8", function(error, data) {
  html_tools = data.toString();
});
// Basic MetaMask Test
var html_metamask = Object.create(null);
fs.readFile("metamask.html", "utf-8", function(error, data) {
  html_metamask = data.toString();
});
// BulkSend Token
var html_bulk = Object.create(null);
fs.readFile("bulksender.html", "utf-8", function(error, data) {
  html_bulk = data.toString();
});
// Event Calendar
var html_events = Object.create(null);
fs.readFile("calendar.html", "utf-8", function(error, data) {
  html_events = data.toString();
});
// Routing 
app.all('/', function (req, res) {
  res.send( html_header + html_tools + html_footer );
});
app.all('/metamask', function (req, res) {
  res.send(html_header + html_metamask + html_footer);
});
app.all('/bulksender', function (req, res) {
  res.send(html_header + html_bulk + html_footer);
});
app.all('/events', function (req, res) {
  res.send(html_header + html_events + html_footer);
});
// Start Server
app.listen(3000, function () {
  console.log('Listening to Port 3000');
});
