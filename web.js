var express = require('express');
var buffer = new Buffer(50);

var app = express.createServer(express.logger());

buffer = fs.readFileSync('./index.html');

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
