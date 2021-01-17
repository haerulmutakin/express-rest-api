import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { PORT, MONGGOSE_CONN_OPTIONS } from './config/config';
import appRoutes from './routes';
require('dotenv/config');

const app = express();
const DB_CONN: any = process.env.DB_CONNECTION;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/v1/api', appRoutes);

mongoose.connect(DB_CONN, MONGGOSE_CONN_OPTIONS, () => console.log('App is connected to DB'));

app.listen(PORT, () => console.log('application running on port', PORT));
