var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.resolve(path.join(__dirname))));

app.get('*', function(request, response) {
  response.sendfile(path.join(__dirname, 'index.html'));
});

app.listen(5000, function() {
  console.log('Start server: http://localhost:5000');
});
