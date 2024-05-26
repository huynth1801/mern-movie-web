import RequestWithUser from 'interfaces/requestWithUser.interface'
import Review from 'models/review.model'
import { Response } from 'express'
import responseHandler from 'handlers/response.handler'

const create = async (req: RequestWithUser, res: Response) => {
  try {
    const { movieId } = req.params
    const review = new Review({
      user: req.user?.id,
      movieId,
      ...req.body,
    })

    await review.save()

    return responseHandler.created(res, {
      ...review.toObject(),
      id: review.id,
      user: req.user,
    })
  } catch (err) {
    responseHandler.error(res)
  }
}

const remove = async (req: RequestWithUser, res: Response) => {
  try {
    const { reviewId } = req.params
    const review = Review.findOne({
      _id: reviewId,
      user: req.user?.id,
    })
    if (!review) return responseHandler.notFound(res)

    await review.deleteOne()
    return responseHandler.ok(res)
  } catch (error) {
    return responseHandler.error(res)
  }
}

const getReviewOfUser = async (req: RequestWithUser, res: Response) => {
  try {
    const reviews = await Review.find({
      user: req.user?.id,
    }).sort('-createdAt')

    return responseHandler.ok(res, reviews)
  } catch (error) {
    return responseHandler.error(res)
  }
}

export default { create, remove, getReviewOfUser }
