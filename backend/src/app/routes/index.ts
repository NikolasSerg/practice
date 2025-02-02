import path from 'path';
import fs from 'fs';
import { Router } from 'express';
import logger from '../utils/logger';
import { glob } from 'glob';

const route = Router();

export function registerRoutes(router: Router) {
  const modulePath = path.join(process.cwd(), 'src/modules/**/*.routes.*');
  const routes = glob.sync(modulePath);
  logger.info('Routers: ')
  logger.info(JSON.stringify(routes))
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

registerRoutes(route)


export default route;
