import express from "express";
import { config } from "dotenv";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
config({ path: "./config/config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`))
dbConnection();

export default app;
