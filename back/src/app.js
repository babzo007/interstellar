import express from 'express';
import astronauteRoutes from './routes/astronautRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/astronauts', astronauteRoutes);
export default app;
