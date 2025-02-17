import { Request, Response } from 'express';
import { getUsersServices } from './user.services.js';
// import logger from '@/utils/logger';
import logger from '../../app/utils/logger/index.js';

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const result = await getUsersServices();
    res.json(result);
  } catch (e) {
    console.error(e, 'error in controller');
    logger.error(`${e}, - 'error in controller'`);
  }
};
