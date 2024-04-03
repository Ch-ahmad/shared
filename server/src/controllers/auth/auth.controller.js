import { UserModel } from "../../models/User.model.js";
import { comparePassword, hashPassword } from "../../utils/bcrypt.js";
import { generateJsonWebToken } from "../../utils/jsonwebtoken.js";
export async function registerUserByEmail(req, res) {
  const { name, email, password } = req.body;
  const isAlreadySignedUp = await UserModel.findOne({
    email,
  });
  console.log(isAlreadySignedUp);
  if (isAlreadySignedUp) {
    return res.status(400).send({
      message: "User already signed up",
    });
  }
  const passwordHashed = await hashPassword(password);
  const user = await UserModel.create({
    name,
    email,
    password: passwordHashed,
  });
  return res.status(200).send({
    message: "User created successfully",
    user,
  });
}
export async function registerUserByGoogleAuth(req, res) {
  const { name, email, profile_image } = req.body;
  console.log(email);
  const isAlreadySignedUp = await UserModel.findOne({
    email,
  });
  console.log(isAlreadySignedUp);
  if (isAlreadySignedUp) {
    return res.status(400).send({
      message: "User already signed up",
    });
  }
  const user = await UserModel.create({
    name,
    email,
    profile_image,
    login_type: "google",
  });
  return res.status(200).send({
    message: "User created successfully",
    user,
  });
}

export async function loginUserByGoogleAuth(req, res) {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({
      email,
    });
    if (!user) {
      return res.status(404).send({
        message: "No account is found on the provided email",
      });
    }

    const tokenPayload = {
      id: user._id,
      email: user.email,
    };
    const token = await generateJsonWebToken(tokenPayload);

    return res.status(200).send({
      message: "Logged in Successfully.",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
      error,
    });
  }
}
export async function loginUserByEmail(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      return res.status(404).send({
        message: "No account is found on the provided email",
      });
    }
    if (user && user.login_type !== "email") {
      return res.status(400).send({
        message: "Please use the google login",
      });
    }
    const isConfirmed = comparePassword(password, user.password);
    if (!isConfirmed) {
      return res.status(400).send({
        message: "Email or password must be wrong",
      });
    }
    const tokenPayload = {
      id: user._id,
      email,
    };
    const token = await generateJsonWebToken(tokenPayload);
    console.log(token);
    return res.status(200).send({
      message: "Logged in Successfully.",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
      error,
    });
  }
}
