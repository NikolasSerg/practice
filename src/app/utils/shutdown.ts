import { Server } from 'http';
import logger from './logger.js';
import { db } from 'src/server.js';

export const shutDownProcess = async (server: Server, signal: string) => {
  logger.info(`Signal ${signal} to stop server`);

  try {
    await db.disconnect();
    logger.info('DB disconnected');
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(`Error disconnecting DB: ${error.message}`);
    } else {
      logger.error(`Unknown Error disconnecting DB: ${error}`);
    }
  }

  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
};
