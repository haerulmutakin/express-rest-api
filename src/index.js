const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/index');

app.get('/', () =>  console.log('app is working'));
app.use('/v1/api', routes);

// Conncet to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useUnifiedTopology: true},  () => {
        console.log('connected to DB')
});


app.listen(PORT, () => console.log('application run on port', PORT));