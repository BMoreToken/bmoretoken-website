const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('header.html').pipe(res)
  var express = require('express')
  var app = express()
  app.get('/tools/metamask', function (req, res) {
    fs.createReadStream('metamask.html').pipe(res)
  })
  app.get('/tools/bulksender', function (req, res) {
    fs.createReadStream('bulksender.html').pipe(res)
  })
  app.get('/tools/events', function (req, res) {
    fs.createReadStream('calendar.html').pipe(res)
  })
  fs.createReadStream('footer.html').pipe(res)
})
server.listen(process.env.PORT || 3000)
