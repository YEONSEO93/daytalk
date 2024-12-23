import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import talksRouter from './router/talks.js';
import authRouter from './router/auth.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/talks', talksRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});


app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);