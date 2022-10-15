const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const html = require('./routes/htmlRoutes');
const api = require('./routes/apiRoutes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => {
  console.log(`API server is now listening on port ${PORT}!`);
});