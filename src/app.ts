import express from 'express';
import dotenv from 'dotenv';
import setupSwagger from '@app/swagger/index.js';
import route from '@routes/index.js';
import helmet from 'helmet';
import { notFound } from '@middleware/notFound.js';
import cors from 'cors';

dotenv.config();

const app = express();

const whiteList = ['http://localhost:4000'];
const corsOption = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
cors(corsOption);

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
} else {
  app.use(
    helmet({
      contentSecurityPolicy: false,
      hsts: false,
    }),
  );
}

app.use(express.json());
app.use('/', route);
setupSwagger(app);
app.use(notFound);

export default app;
