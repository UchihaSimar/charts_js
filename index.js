var express = require('express');
var path = require('path');
var app = express();
const port = 3000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/ChartJS_Demo.html'));
});

app.get('/chartBuilding.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/chartBuilding.js'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))