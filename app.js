const http = require ('http') // Import Node.js core module
const fs = require('fs') // Import file module
//read html
let html = fs.readFileSync(__dirname+'/templates/page.html');

const server = http.createServer(function(req,res){
  //write the http
  res.writeHead(200 ,{'Content-Type': 'text/html'});
  //write html to the client
  res.end(html);
})
server.listen(3000); // listen for any incoming requests
console.log("Node.js web server at port 3000 is running..");