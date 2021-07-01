var express = require('express')
var app = express()
/*
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('header.html').pipe(res)
  app.get(/metamask/, function (req, res) {  
    fs.createReadStream('metamask.html').pipe(res)
  })
  app.get(/bulksender/, function (req, res) {
    fs.createReadStream('bulksender.html').pipe(res)
  })
  app.get(/events/, function (req, res) {
    fs.createReadStream('calendar.html').pipe(res)
  })
  fs.createReadStream('footer.html').pipe(res)
})
*/
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

