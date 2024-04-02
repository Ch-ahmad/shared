import { UserModel } from "../../models/User.model.js";

export async function fetchUserDetails(req, res) {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).send({
        message: "No user is found",
      });
    }
    return res.status(200).send({
      message: "User details",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      message: "Server Error",
      error,
    });
  }
}
