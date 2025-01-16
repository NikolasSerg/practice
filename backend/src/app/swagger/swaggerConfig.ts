import swaggerJsdoc from 'swagger-jsdoc';
import path from "path";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Документація для API проекту',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [path.join(__dirname, './*.yaml')],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;

