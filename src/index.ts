import express from 'express';
import dotenv from 'dotenv';
import mongodb from './sevices/mongodb';
dotenv.config();
mongodb();
const app = express();

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);