var http = require('http');
module.exports = () => {
  http.createServer(function (req, res) {
    res.write("I'm alive");
    res.end();
  }).listen(8080);

  console.log('[HTTP] Web server deployed at https://localhost:8080');
}
