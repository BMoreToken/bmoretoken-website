const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('header.html').pipe(res)
  fs.createReadStream('bulksender.html').pipe(res)
  fs.createReadStream('footer.html').pipe(res)
})

server.listen(process.env.PORT || 3001)
