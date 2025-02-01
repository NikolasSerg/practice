import path from 'path';
import fs from 'fs';
import { Router } from 'express';
import logger from '../utils/logger';
import { glob } from 'glob';

const route = Router();

export function registerRoutes(router: Router) {
  const modulePath = path.join(__dirname, '../../modules/**/*.routes.*');
  console.log(modulePath, '********************modulePath*******************')
  const routes = glob.sync(modulePath);
  console.log(routes, '********************routes*******************')
  logger.info('Routers: ')
  logger.info(JSON.stringify(routes))
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

  // const swaggerFolderPath = path.join(process.cwd(), "src/app/swagger")
  // const swaggerFilePath = path.join(swaggerFolderPath, "swagger.json")

  // console.log(process.cwd(), '/////////////////// process.cwd()///////////')
  // console.log(swaggerFolderPath, '/////////////////// folderPath ///////////')

  // if (process.env.NODE_ENV === 'development') {
  //   if(fs.existsSync(swaggerFolderPath)) {
  //     if(fs.existsSync(swaggerFilePath)) {
  //       register(swaggerFilePath, route)
  //     } else {
  //       logger.warn('The file "swagger.json" doesn`t exist')
  //     }
  //   } else {
  //     logger.warn('The folder "swagger" doesn`t exist')
  //   }
  // } else {
  //   console.log('Swagger UI is disabled (not in development environment).');
  // }

registerRoutes(route)


export default route;
