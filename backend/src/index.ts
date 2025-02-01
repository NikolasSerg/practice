import express from "express";
import dotenv from "dotenv";
import route from './app/routes';
import setupSwagger from "./app/swagger";
import logger from "./app/utils/logger";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/api', route);

setupSwagger(app);

app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`)
})
