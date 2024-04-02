import { verifyJsonWebToken } from "../utils/jsonwebtoken";

// Middleware: will be used to authenticate the user and then send the content of that user to him only
export async function isAuthenticated(req, res, next) {
  try {
    const token = req.headers["x-access-token"] || "";
    const decodeToken = await verifyJsonWebToken(token);
    req.user = decodeToken;
    next();
  } catch (error) {
    res.status(401).send({
      message: "Token is invalid",
    });
  }
}
