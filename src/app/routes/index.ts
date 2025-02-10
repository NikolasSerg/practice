import path from 'path';
import { Router } from 'express';
import logger from '@/utils/logger/index';
import { glob } from 'glob';

const route = Router();

export function registerRoutes(router: Router) {
    const modulePath = path.join(process.cwd(), 'src/modules/**/*.routes.*');
    const routes = glob.sync(modulePath);
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
