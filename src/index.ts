import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import appRoutes from './routes';

require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONN: any = process.env.DB_CONNECTION;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (_, resp) =>  resp.send('App is working'));
app.use('/v1/api', appRoutes);

mongoose.connect(
    DB_CONN,
    {useUnifiedTopology: true, useNewUrlParser: true},
    () => {
        console.log('connected to DB')
    }
);

app.listen(PORT, () => console.log('application run on port', PORT));
