const express = require('express');
var router  = express.Router();
var http = require('http');
var path = require('path');
var fs = require('fs');
var CONST = require('./CONST.js');

const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post('/api/generateScript', (req, res) => {
  var script = CONST.HEAD_SCRIPT;
  req.body.response.map((value, index) => (
    script += CONST.PROSODY_START,
    script += value.original,
    script += CONST.PROSODY_END,
    script += CONST.SLEEP_BETWEAN_WORDS,
    script += CONST.PROSODY_START,
    script += value.translated,
    script += CONST.PROSODY_END,
    script += CONST.SLEEP_BETWEAN_TRANSLATIONS
  ))
  script += CONST.FOOT_SCRIPT;

  filePath = __dirname + '/SamplePowerShellScript.ps1';
  fs.appendFile(filePath, script);
});

app.get('/download/:file(*)',(req, res) => {
  var file = req.params.file;
  var fileLocation = path.join('./',file);
  console.log(fileLocation);

  res.download(fileLocation, file);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
