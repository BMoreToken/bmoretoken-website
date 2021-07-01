var express = require('express')
var app = express()
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('header.html').pipe(res)
  res.send('1')
  app.get(/metamask/, function (req, res) {  
    res.send('hello metamask')
    //res.send(fs.createReadStream('calendar.html'))
    //fs.createReadStream('metamask.html').pipe(res)
  })
  res.send('2')
  app.get(/bulksender/, function (req, res) {
    res.send('hello bulksender')
    //res.send(fs.createReadStream('calendar.html'))
    //fs.createReadStream('bulksender.html').pipe(res)
  })
  res.send('3')
  app.get(/events/, function (req, res) {
    res.send('hello events')
    //res.send(fs.createReadStream('calendar.html'))
    //fs.createReadStream('calendar.html').pipe(res)
  })
  res.send('4')
  fs.createReadStream('footer.html').pipe(res)
})
server.listen(process.env.PORT || 3000)
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
