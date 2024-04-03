import express from "express";
import AUTH_ROUTER from "./auth/index.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import USER_ROUTER from "./user/user.route.js";
import USER_POST_ROUTER from "./post.route.js";

const MAIN_APP_ROUTER = express.Router();
MAIN_APP_ROUTER.use("/auth", AUTH_ROUTER);
MAIN_APP_ROUTER.use("/auth", isAuthenticated, USER_ROUTER);
MAIN_APP_ROUTER.use("/", isAuthenticated, USER_POST_ROUTER);

export default MAIN_APP_ROUTER;
