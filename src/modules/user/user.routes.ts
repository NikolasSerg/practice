import { Router } from 'express';
import { UserController } from './user.controllers.js';

const createUserRouter = (userController: UserController): Router => {
  const router = Router();

  router.get('/users/all', userController.getAllUsers.bind(userController));
  router.get('/user/:id', userController.getUserById.bind(userController));

  return router;
};

export default createUserRouter;
