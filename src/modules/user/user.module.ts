import { DBTYPE } from '@databases/database.types.js';
import { UserRepositoryFactory } from './user.repository.factory.js';
import { UserService } from './user.services.js';
import { UserController } from './user.controllers.js';
import { db } from 'src/server.js';
import createUserRouter from './user.routes.js';

const userRepository = new UserRepositoryFactory(db, process.env.DB_TYPE as DBTYPE).createRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = createUserRouter(userController);

export default { path: '/user', route: router };
