import { Request } from "express";
import { IUser } from "../models/user.model";

interface RequestWithUser extends Request {
    user?: IUser
}

export default RequestWithUser