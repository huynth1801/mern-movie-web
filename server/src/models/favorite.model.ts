// src/models/favorite.model.ts
import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";
import modelOptions from "./models.options";

export interface IFavorite extends Document {
  user: mongoose.Types.ObjectId;
  mediaType: "tv" | "movie";
  mediaId: string;
  mediaTitle: string;
  mediaPoster: string;
  mediaRate: number;
}

const favoriteSchema: Schema<IFavorite> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mediaType: {
      type: String,
      enum: ["tv", "movie"],
      required: true,
    },
    mediaId: {
      type: String,
      required: true,
    },
    mediaTitle: {
      type: String,
      required: true,
    },
    mediaPoster: {
      type: String,
      required: true,
    },
    mediaRate: {
      type: Number,
      required: true,
    },
  },
  modelOptions
);

const Favorite: Model<IFavorite> =
  mongoose.model<IFavorite>("Favorite", favoriteSchema);

export default Favorite;
