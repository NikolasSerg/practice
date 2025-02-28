import { Request, Response } from 'express';
import logger from '@app/utils/logger.js';
import { UserService } from './user.services.js';

export class UserController {
  private userService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();

      if (!users) {
        res.status(404).json({ message: 'Users not found' });
      }

      res.json(users);
    } catch (error) {
      logger.error(`${error}, - 'error in controller'`);
    }
  }
}
