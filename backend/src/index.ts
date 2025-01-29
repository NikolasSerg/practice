import express from "express";
import dotenv from "dotenv";
import route from './app/routes';
import setupSwagger from "./app/utils/swagger";
import logger from "./app/utils/logger";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/users', (req, res) => {res.send('TTTTTTTTTTTTTTT')});
// app.use('/', route);

setupSwagger(app);

app.listen(PORT, () => {
    // console.log(`Listening on port ${PORT}` );
    logger.info(`Listening on port ${PORT}`)
})
