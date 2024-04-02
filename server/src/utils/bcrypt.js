import bcrypt from "bcrypt";
export async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
}
export async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}
