const express = require('express');
const app = express();

app.use(express.json());

//routers

//testing api
app.get('/api', (req, res) => {
    res.status(200).json({ message: 'My name is Surjeet kaur' });
});

app.post('/api/data', (req, res) => {
    const { data } = req.body;
    if (data) {
        res.status(201).json({ received: data });
    } else {
        res.status(400).json({ error: 'No data provided' });
    }
});
// to run this code on terminal npm test
module.exports = app;