const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/health-check', (req, res) => {
  return res.send({ status: 'ok' });
});

module.exports = app;
