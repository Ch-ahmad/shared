import express from "express";
import AUTH_ROUTER from "./auth/index.js";

const MAIN_APP_ROUTER = express.Router();
console.log("hello");
MAIN_APP_ROUTER.use("/auth", AUTH_ROUTER);

export default MAIN_APP_ROUTER;
