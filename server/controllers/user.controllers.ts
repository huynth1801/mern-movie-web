import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt-ts";
import userModel from "../src/models/user.model";
import responseHandler from "../src/handlers/response.handler";
import { Request, Response, NextFunction } from "express";

const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password, displayname } = req.body;
    const checkUser = await userModel.findOne({ username });
    if (checkUser)
      return responseHandler.badRequest(
        res,
        "username already used"
      );

    const user = new userModel();

    user.displayname = displayname;
    user.username = username;
    user.setPassword(password);

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET!,
      { expiresIn: "24h" }
    );

    await user.save();
  } catch (err) {
    throw err;
  }
};
