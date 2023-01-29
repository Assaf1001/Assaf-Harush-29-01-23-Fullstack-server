import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import './db/mongoose.js';

import weatherRouter from './routers/weatherRouter.js';
import userRouter from './routers/userRouter.js';

const port = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(weatherRouter);
app.use(userRouter);

app.use('/test', (req, res) => res.send('ok'));

app.listen(port, () => console.log('server in running on port:', port));
