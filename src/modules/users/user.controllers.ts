import { Request, Response } from 'express';
// import { getUsersServices } from './user.services.js';
import logger from '@utils/logger/index.js';

export const getUsersController = async (req: Request, res: Response) => {
  try {
    // const users = await getUsersServices();
    const users = '';

    if (!users) {
      res.status(404).json({ message: 'Users not found' });
    }
    res.json(users);
  } catch (e) {
    console.error(e, 'error in controller');
    logger.error(`${e}, - 'error in controller'`);
  }
};
