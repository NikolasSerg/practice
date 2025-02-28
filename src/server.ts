import { Server } from 'http';
import app from './app.js';
import { DatabaseFactory } from './databases/database.factory.js';
import { DBTYPE } from './databases/database.types.js';
import logger from '@app/utils/logger.js';
import { shutDownProcess } from '@app/utils/shutdown.js';

const PORT = process.env.PORT || 3000;

const db = DatabaseFactory.createDatabase(process.env.DB_TYPE as DBTYPE, process.env.DB_URI);

db.connect()
  .then(() => {
    logger.info(`Connected to ${process.env.DB_TYPE} database`);
    const server: Server = app.listen(PORT, () => {
      logger.info(`Listening on port ${PORT}`);
    });

    ['SIGINT', 'SIGTERM'].forEach((signal) => {
      process.on(signal, () => {
        shutDownProcess(server, signal);
      });
    });
  })
  .catch((err) => {
    logger.error('Database connection error:', err);
    process.exit(1);
  });

export { db };
