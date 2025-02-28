import express from 'express';
import dotenv from 'dotenv';
import setupSwagger from '@app/swagger/index.js';
import route from '@routes/index.js';
import helmet from 'helmet';
import { notFound } from '@middleware/notFound.js';

dotenv.config();

const app = express();

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
app.use('/api', route);
setupSwagger(app);
app.use(notFound);

export default app;
