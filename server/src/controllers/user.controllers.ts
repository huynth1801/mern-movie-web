import userModel, {IUser} from "../models/user.model";
import jsonwebtoken from "jsonwebtoken";
import { Request, Response } from "express";
import responseHandler from "../handlers/response.handler";

const signup = async (req: Request, res: Response) => {
    try {
        const {username, password, displayName } = req.body;
        const checkUser = await userModel.findOne({username});
        if(checkUser) return responseHandler.badRequest(res, "Username already used");

        const user = new userModel()

        user.displayname = displayName;
        user.username = username;
        user.password = password;

        await user.save()

        const token = jsonwebtoken.sign(
            {data: user.id},
            process.env.TOKEN_SECRET!,
            {expiresIn: "24h"}
        )

        responseHandler.created(res, {
            token,
            ...user.toObject(),
            id: user.id
        })
    }
    catch (err) {
        responseHandler.error(res)
    }
}