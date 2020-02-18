const app = require("./backend/app")
const http = require("http");
//const server = http.createServer((req,res) => {
//res.end("connected");
//console.log("Hello");
//});
//server.listen(3000);

const server = http.createServer(app);

server.listen(3000);