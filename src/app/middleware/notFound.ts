import { Request, Response } from 'express';
import logger from '@utils/logger/index.js';

export function notFound(req: Request, res: Response) {
  logger.warn(`404 - Route not found: ${req.originalUrl}`);
  res.status(404).json({ message: 'Route not found' });
}
