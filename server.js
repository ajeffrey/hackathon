const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  fs.readFile(path.resolve('./index.html'), (err, data) => {
    res.header('Content-Type', 'text/html').send(data);
  });
});

app.use('/static', express.static(path.resolve('./static')));

app.get('/video.mp4', (req, res) => {
  res.sendFile(path.resolve('./videoplayback.mp4'));
});

app.use('/assets', express.static(path.resolve('./dist')));

app.listen(3000, () => {
  console.log('listening...');
});