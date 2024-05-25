import responseHandler from "../handlers/response.handler";
import RequestWithUser from "../interfaces/requestWithUser.interface";
import { Response } from "express";
import Favorite from "../models/favorite.model";

const addFavorite = async (
  req: RequestWithUser,
  res: Response
) => {
  try {
    const isFavorite = await Favorite.findOne({
      user: req.user?.id,
      mediaId: req.body.mediaId,
    });
    if (isFavorite) {
      return responseHandler.ok(res, isFavorite);
    }

    const favorite = new Favorite({
      ...req.body,
      user: req.user?.id,
    });

    await favorite.save();
  } catch {
    responseHandler.error(res);
  }
};
