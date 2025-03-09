import { Server } from 'http';
import app from './app.js';
import { DatabaseFactory } from './databases/database.factory.js';
import { DBTYPE } from './databases/database.types.js';
import logger from '@app/utils/logger.js';
import { shutDownProcess } from '@app/utils/shutdown.js';

const PORT = process.env.PORT || 3000;
let server: Server | null = null;

process.on('uncaughtException', (err) => {
  logger.error(`🛑 Uncaught Exception: ${err.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.error(`⚠️ Unhandled Rejection: ${reason}`);
});

const db = DatabaseFactory.createDatabase(process.env.DB_TYPE as DBTYPE, process.env.DB_URI);

['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, () => {
    if (server) {
      logger.warn(`🛑 Received ${signal}, shutting down server...`);
      shutDownProcess(server, signal);
    } else {
      logger.warn(`⚠️ Received ${signal}, but server is not running. Exiting...`);
      process.exit(0);
    }
  });
});

db.connect()
  .then(() => {
    logger.info(`Connected to ${process.env.DB_TYPE} database`);
    server = app.listen(PORT, () => {
      logger.info(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error('Database connection error:', err);
    process.exit(1);
  });

export { db };
