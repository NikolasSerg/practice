import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import fs, { Dirent } from 'fs';
import path from 'path';


interface SwaggerDocument {
  openapi: string;
  info: {
    title: string;
    version: string;
  };
  paths: Record<string, unknown>;
}


function setupSwagger(app: Application): void {
  if (process.env.NODE_ENV === 'development') {
    const swaggerFolderPath = path.join(__dirname, './swagger.config.yaml');
    const swaggerDocument = yaml.load(fs.readFileSync(swaggerFolderPath, 'utf-8')) as SwaggerDocument;
    
    app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))

    console.log('Swagger UI is enabled for development environment.');
  } else {
    console.log('Swagger UI is disabled (not in development environment).');
  }
}

export default setupSwagger;