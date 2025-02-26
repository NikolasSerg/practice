import express from 'express';
import dotenv from 'dotenv';
import setupSwagger from '@app/swagger/index.js';
import route from '@routes/index.js';
import logger from '@utils/logger/index.js';
import helmet from 'helmet';
import { DatabaseFactory } from './databases/database.factory.js';
import { DBTYPE } from './databases/database.types.js';
import { notFound } from '@middleware/notFound.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

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
app.use(notFound);

setupSwagger(app);

const db = DatabaseFactory.createDatabase(process.env.DB_TYPE as DBTYPE, process.env.DB_URI);
db.connect()
  .then(() => logger.info(`Connected to ${process.env.DB_TYPE} database`))
  .catch((err) => logger.error('Database connection error:', err));

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});

export { db };
