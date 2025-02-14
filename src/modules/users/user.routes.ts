import { Router } from 'express';
import { getUsersController } from './user.controllers.js';

export const register = (route: Router) => {
    route.get('/users', getUsersController);
};
