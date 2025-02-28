import { Request, Response } from 'express';
import logger from '@app/utils/logger.js';

export function notFound(req: Request, res: Response) {
  logger.warn(`404 - Route not found: ${req.originalUrl}`);
  res.status(404).json({ message: 'Route not found' });
}
