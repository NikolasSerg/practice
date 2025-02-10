import { Router } from 'express';
import { getUsersController } from './user.controllers';

export const register = (route: Router) => {
    route.get('/users', getUsersController);
};
