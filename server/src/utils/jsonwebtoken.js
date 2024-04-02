import jwt from "jsonwebtoken";

export async function generateJsonWebToken(payload) {
  try {
    const secretKey = process.env.SECRET_KEY_JSON;
    console.log({
      secretKey,
      payload,
    });
    const token = await jwt.sign(payload, secretKey, {
      noTimestamp: true,
    });
    return token;
  } catch (error) {
    throw new Error("Token generation failed");
  }
}

export async function verifyJsonWebToken(token) {
  try {
    const decoded = await jwt.verify(token, process.env.SECRET_KEY_JSON);
    return decoded;
  } catch (error) {
    throw new Error("Token verification failed");
  }
}
