import { Router } from 'express';
import { UserController } from './user.controllers.js';

const createUserRouter = (userController: UserController): Router => {
  const router = Router();

  router.get('/all', userController.getAllUsers.bind(userController));

  return router;
};

export default createUserRouter;
