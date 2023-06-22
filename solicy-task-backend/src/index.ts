import express from 'express';
import sequelize from "./common/database/config/db";
import cors from 'cors';
import router from "./common/routes/router";
import * as process from "process";
const app = express();

const PORT = process.env.SERVER_PORT || 5000;

app.use(express.json())
app.use(cors());
app.use('/api/v1/', router);

(async () => {
    try {
        await sequelize.authenticate();
        app.listen(PORT, () => {
            console.log(`Server started in port - ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
})()