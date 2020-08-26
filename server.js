const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/mountains', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all mountains' });
});

app.get('/api/v1/mountains/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show mountain ${req.params.id}` });
});

app.post('/api/v1/mountains', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new mountain' });
});

app.put('/api/v1/mountains/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update mountain ${req.params.id}` });
});

app.delete('/api/v1/mountains/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete mountain ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
