const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const queryParams = url.parse(req.url, true).query;
  const jsonContent = JSON.stringify(queryParams);
  res.write(jsonContent);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
