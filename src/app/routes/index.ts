import path from 'path';
import { Router } from 'express';
import logger from '@utils/logger/index.js';
import { glob } from 'glob';

const route = Router();

export function registerRoutes(router: Router) {
  const baseDir = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
  const modulePath = path.join(process.cwd(), `${baseDir}/modules/**/*.routes.*`);
  const routes = glob.sync(modulePath).filter((file) => !file.endsWith('.map'));
  logger.info('Routers: ');
  logger.info(JSON.stringify(routes));
  routes.map((route) => register(route, router));
}

async function register(routePath: string, router: Router) {
  const route = await import(routePath);
  route.register(router);
}

registerRoutes(route);

export default route;
