const express = require('express');

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

app.get('/api/generateMP3', (req, res) => {
  res.send({ mp3: 'File with MP3' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
