import express from 'express';
import dotenv from 'dotenv';
// import route from '@/routes/index';
import route from './app/routes/index.js';
// import setupSwagger from './app/swagger/index';
// import logger from '@/utils/logger/index';
// import logger from './app/utils/logger/index';
import logger from './app/utils/logger/index.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/api', route);

// setupSwagger(app);

app.listen(PORT, () => {
  logger.warn(`Listening on port ${PORT}`);
  logger.info(`Listening on port ${PORT}`);
});
