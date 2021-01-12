const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
const userRoute = require('./routes/user');
app.use('/user', userRoute);


app.listen(PORT, () => console.log('application run on port', PORT));