import express from 'express';
import dotenv from 'dotenv';
import setupSwagger from '@app/swagger/index.js';
import route from '@routes/index.js';
import logger from '@utils/logger/index.js';
import { notFound } from '@middleware/notFound.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/api', route);
app.use(notFound);

setupSwagger(app);

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
