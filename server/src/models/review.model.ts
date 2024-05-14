import mongoose, {Schema, Document, Model} from "mongoose";
import modelOptions from "./models.options";

interface IReview extends Document {
    user: Schema.Types.ObjectId,
    content: string,
    mediaType: 'tv' | 'movie',
    mediaId: string,
    mediaTitle: string,
    mediaPoster: string
}

const reviewSchema = new Schema<IReview>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    mediaType: {
        type: String,
        enum: ['tv', 'movie'],
        required: true
    },
    mediaId: {
        type: String,
        required: true
    },
    mediaTitle: {
        type: String,
        required: true
    },
    mediaPoster: {
        type: String,
        required: true
    }
}, modelOptions);

const Review: Model<IReview> = mongoose.model<IReview>('Review', reviewSchema);

export default Review;