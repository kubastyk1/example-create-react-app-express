const express = require('express');
var router  = express.Router();
var http = require('http');
var path = require('path');
var fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/sample', (req, res) => {
  res.send({ sample: [
    {original:"Kot", translated:"Cat"},
    {original:"Pies", translated:"Dog"},
    {original:"Ptak", translated:"Bird"}
  ]});
});

app.get('/download/:file(*)',(req, res) => {
  var file = req.params.file;
  var fileLocation = path.join('./',file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
