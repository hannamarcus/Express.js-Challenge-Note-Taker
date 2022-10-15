const path = require('path');
const app = require('express').Router();

app.get('/', (_req, res) => {
  console.log('testing')
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get('/notes', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;