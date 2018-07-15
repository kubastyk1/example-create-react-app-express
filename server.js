const express = require('express');
var router  = express.Router();
var http = require('http');
var path = require('path');
var fs = require('fs');
var mongojs = require('mongojs');
const shell = require('node-powershell');
var CONST = require('./CONST.js');

var db = mongojs('translatorApp', ['translations'])
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

let ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});

let deleteOldFiles = function (req, res, next) {
  let dirname = __dirname + CONST.SOUNDS_FOLDER;
  fs.readdir(dirname, function(err, data){
    data.forEach(function(file, index) {
       let fileNameWithotFooter = file.replace(CONST.FILE_FOOTER_FORMAT,'');
       let creationTimeInMilseconds = fileNameWithotFooter.replace(CONST.WAV,'');
       let delayTime = 5*60*1000; // 5 minutes
       if (new Date().getTime() - creationTimeInMilseconds > delayTime) {
         fs.unlink(dirname + file, (err) => {
            if (err) throw err;
            console.log(dirname + file + ' was deleted');
          });
       }
    })
  })
  next()
}
app.use(deleteOldFiles)

app.get('/sample', (req, res) => {
  db.translations.find(function (err, docs) {
    res.send({ data: docs });
  })
});

app.get('/lessons/:id', (req, res) => {
  db.translations.find(function (err, docs) {
    res.send({ data: docs });
  })
});

app.post('/addLesson', (req, res) => {
  db.lessons.insert(req.body, function(err, res) {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

app.post('/api/generateScript', (req, res) => {
  var fileName = CONST.SOUNDS_FOLDER + CONST.FILE_FOOTER_FORMAT + new Date().getTime() + CONST.WAV;
  var script = CONST.HEAD_SCRIPT_1;
  script += fileName
  script += CONST.HEAD_SCRIPT_2;
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

  ps.addCommand(script)
  ps.invoke()
    .then(output => {
      console.log(output);
      res.send({ fileName: fileName });
    })
    .catch(err => {
      console.log(err);
      ps.dispose();
    });
});

app.get('/download/:file(*)',(req, res) => {
  var file = req.params.file;
  var fileLocation = path.join('./',file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
