const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const FormData = require('./models/formData');
const app = express()
require('dotenv').config()



// middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));


// mongodb connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err)
    })
// routes
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, message } = req.body
        await FormData.create({ name, email, message });
        res.status(201).json({ message: 'form submitted successfully' })
    }
    catch (err) {
        res.status(500).json({ message: 'error submitting data' })
        console.log(err)
    }
})

app.listen(3500, () => {
    console.log('server is running on port 3500')
})