// src/middleware/auth.ts
import jsonwebtoken from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import responseHandler from "../handlers/response.handler";
import requestHandler from "../handlers/request.handler";
import userModel, { IUser } from "../models/user.model";
import RequestWithUser from "../interfaces/requestWithUser.interface";

interface TokenDecoded {
  data: string;
}

const tokenDecode = (
  req: Request
): TokenDecoded | false => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];
      return jsonwebtoken.verify(
        token,
        process.env.TOKEN_SECRET as string
      ) as TokenDecoded;
    }

    return false;
  } catch {
    return false;
  }
};

const auth = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const tokenDecoded = tokenDecode(req);

  if (!tokenDecoded) {
    return responseHandler.unauthorize(res);
  }

  try {
    const user = await userModel.findById(
      tokenDecoded.data
    );

    if (!user) {
      return responseHandler.unauthorize(res);
    }

    req.user = user as IUser;
    next();
  } catch (error) {
    console.error("Error retrieving user:", error);
    return responseHandler.error(res);
  }
};

export default { auth, tokenDecode };
