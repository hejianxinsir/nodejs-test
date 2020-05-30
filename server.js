
let fs = require('fs')
let info = fs.readFileSync('./1.txt')
let http = require('http')

let server = http.createServer(function(req, res){
  console.log(req.url)
  // res.writeHead(200, {'Content-Type': 'text/plain'})
  // res.write(info)
  // res.end(info)
  res.status = 200
  res.write(info)
  res.end()
  console.log(res.statusCode)
})

server.listen(9999)
console.log(9999)
