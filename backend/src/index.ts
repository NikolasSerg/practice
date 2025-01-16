import express from "express";
import dotenv from "dotenv";
import  registerRoutes from './app/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './app/swagger/swaggerConfig';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

registerRoutes(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
