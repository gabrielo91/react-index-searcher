const express = require('express');
const cors = require('cors');
const app = express();
const { getUsers } = require('./controller/usersController');

app.use(cors());

app.get('/api/health-check', (req, res) => {
  return res.send({ status: 'ok' });
});

app.get('/api/tweets', (req, res) => {
  return getUsers(req, res);
});

module.exports = app;
