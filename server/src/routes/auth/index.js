import express from "express";
import { schemaParseMiddleWare } from "../../middleware/zod/index.js";
import {
  userSignUpGoogle,
  userSignUpSchema,
} from "../../utils/schema/auth.schema.js";
import {
  loginUserByEmail,
  loginUserByGoogleAuth,
  registerUserByEmail,
  registerUserByGoogleAuth,
} from "../../controllers/auth/auth.controller.js";
const AUTH_ROUTER = express.Router();
AUTH_ROUTER.post(
  "/signup-by-email",
  schemaParseMiddleWare(userSignUpSchema),
  registerUserByEmail
);
AUTH_ROUTER.post(
  "/signup-by-google",
  schemaParseMiddleWare(userSignUpGoogle),
  registerUserByGoogleAuth
);
AUTH_ROUTER.post("/login-google", loginUserByGoogleAuth);
AUTH_ROUTER.post("/login-email", loginUserByEmail);

export default AUTH_ROUTER;
