import express from "express";
import { fetchUserDetails } from "../../controllers/auth/user.controller.js";

const USER_ROUTER = express.Router();
USER_ROUTER.get("/me", fetchUserDetails);

export default USER_ROUTER;
