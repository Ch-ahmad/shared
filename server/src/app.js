import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connect from "./db/connection.js";
import cors from "cors";
import MAIN_APP_ROUTER from "./routes/index.js";
import morgan from "morgan";

const app = express();
connect();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", MAIN_APP_ROUTER);

const PORT_NO = process.env.PORT_NO;
app.listen(PORT_NO, () => {
  console.log("Server is running", PORT_NO);
});
