const fs = require('fs');
const app = require('express').Router();
const { v4: uuidv4 } = require('uuid');

app.get('/notes', (_req, res) => {
  readFromFile('./db/db.json', "utf-8").then(function (data) {
    notesData = JSON.parse(data);
    res.json(notesData);
  });
});

app.post('/notes', function (req, res) {
  const { title, text, id } = req.body;
  // fetch user inputs and create unique id
  readFromFile('./db/db.json', "utf-8").then(results => {
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
      const note = JSON.parse(results);
      note.push(newNote)
      writeToFile('./db/db.json', note);
      res.json(newNote);
    } else {
      res.error('Error');
    }
  })
}
);