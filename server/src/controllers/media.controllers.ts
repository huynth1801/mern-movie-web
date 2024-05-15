import responseHandler from "../handlers/response.handler";
import { Request, Response } from "express";
import tmdbApi from "../tmdb/tmdb.api";
import userModel from "../models/user.model";
import { GetListQuery } from "../types/express";
import tokenMiddleware from "../middleware/token.middleware";
import Favorite from "../models/favorite.model";
import Review from "../models/review.model";

const getList = async (req: Request, res: Response) => {
  try {
    const { page } = req.query as unknown as {
      page: number;
    };
    const { mediaType, mediaCategory } = req.params;

    const response = await tmdbApi.mediaList({
      mediaType,
      mediaCategory,
      page,
    });

    return responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

const getGenres = async (req: Request, res: Response) => {
  try {
    const { mediaType } = req.params;

    const response = await tmdbApi.mediaGenres({
      mediaType,
    });
    return responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

const search = async (req: Request, res: Response) => {
  try {
    const { mediaType } = req.params;
    const { query, page } = req.query as unknown as {
      query: string;
      page: number;
    };
    const response = await tmdbApi.mediaSearch({
      query,
      page,
      mediaType:
        mediaType === "people" ? "person" : mediaType,
    });
    responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

const getDetail = async (req: Request, res: Response) => {
  try {
    const { mediaType, mediaId } =
      req.params as unknown as {
        mediaType: string;
        mediaId: number;
      };
    const params = { mediaType, mediaId };
    const media = await tmdbApi.mediaDetail(params);
    media.credits = await tmdbApi.mediaCredits(params);

    const videos = await tmdbApi.mediaVideos(params);
    media.videos = videos;

    const recommend = await tmdbApi.mediaRecommend(params);
    media.recommend = recommend.results;

    media.images = await tmdbApi.mediaImages(params);

    const tokenDecoded = tokenMiddleware.tokenDecode(req);

    if (tokenDecoded) {
      const user = await userModel.findById(
        tokenDecoded.data
      );

      if (user) {
        const isFavorite = await Favorite.findOne({
          user: user.id,
          mediaId,
        });
        media.isFavorite = isFavorite !== null;
      }
    }
    media.reviews = await Review.find({ mediaId })
      .populate("user")
      .sort("-createdAt");
    responseHandler.ok(res, media);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { getList, getGenres, getDetail, search };
