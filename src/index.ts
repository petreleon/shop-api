import express from 'express';
import dotenv from 'dotenv';
import config from './config.json';
import mongodb from './sevices/mongodb';

dotenv.config();
mongodb();

const app = express();

app.listen(config.port, () =>
  console.log(`${config.name} app listening on port ${config.port}!`),
);