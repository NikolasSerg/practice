import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import logger from '../utils/logger';
import path from 'path';

const test = process.cwd()

function setupSwagger(app: Application): void {
  if (process.env.NODE_ENV === 'development') {
    const swaggerPath = path.join(process.cwd(), 'src/app/swagger/swagger.json');
    
    if(fs.existsSync(swaggerPath)) {
      const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf-8'));
      app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    } else {
      logger.error('swagger.json file in not found')
    }
  } else {
    logger.error('Swagger UI is disabled (not in development environment).');
  }
}

export default setupSwagger;