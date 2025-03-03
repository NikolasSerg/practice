import path from 'path';
import { Router } from 'express';
import logger from '@app/utils/logger.js';
import { glob } from 'glob';
import { extractRoutes } from '@app/utils/extractPathsFromRoute.js';

const route = Router();

export function registerRoutes(router: Router) {
  const baseDir = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

  const modulePath = path.join(process.cwd(), `${baseDir}/modules/**/*.module.ts`);

  const paths = glob.sync(modulePath).filter((file) => !file.endsWith('.map'));

  logger.info('Modules: ');
  logger.info(JSON.stringify(paths.map((path) => path.match(/([^/]+)\.module\.ts$/)[1])));

  paths.map(async (importedRoutesPath) => {
    try {
      await register(importedRoutesPath, router);
    } catch (error: unknown) {
      if (error instanceof Error && error?.message) {
        logger.error(`Router Error: ${error.message}`);
      } else {
        logger.error(`Unknown Router Error: ${error}`);
      }
    }
  });
}

async function register(routePath: string, router: Router) {
  const importedRouteModule = await import(routePath);

  const nameModule = routePath.split('/').pop();
  if (!importedRouteModule.default) {
    logger.error(`Error: routes of module ${nameModule} are not found`);
  } else {
    logger.info(`\n Routes ${nameModule}: \n - ${extractRoutes(importedRouteModule.default).join('; \n - ')};`);
    router.use('/api', importedRouteModule.default);
  }
}

registerRoutes(route);

export default route;
