const http = require("http");

http.createServer((req, res) => {
  res.end("Render OK");
}).listen(process.env.PORT || 3000);
