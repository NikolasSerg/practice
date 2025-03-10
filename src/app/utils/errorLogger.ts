import logger from './logger.js';

export const errorHandler = (error: unknown) => {
  if (error instanceof Error && error?.message) {
    logger.error(`Error loading YAML file path : ${error.message} `);
  } else {
    logger.error(`Unknow Error loading YAML file path : ${error}`);
  }
};
