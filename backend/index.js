const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const FormData = require('./models/formData');
require('dotenv').config();

const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));

// Routes
app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await FormData.create({ name, email, message });
    res.status(201).json({ message: 'form submitted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error submitting data' });
  }
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// For all other routes, serve index.html (for frontend routing support if needed)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'));
});

app.listen(3500, () => {
  console.log('server is running on port 3500');
});
