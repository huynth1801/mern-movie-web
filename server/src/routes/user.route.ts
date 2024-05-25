import express from 'express'
import { body } from 'express-validator'
// import favoriteControllers from '../controllers/favorite.controllers'
import userControllers from '../controllers/user.controllers'
import requestHandler from '../handlers/request.handler'
import userModel from '../models/user.model'
// import tokenMiddleware from '../middleware/token.middleware'

const router = express.Router()

router.post(
  '/signup',
  body('username')
    .exists()
    .withMessage('username is required')
    .isLength({ min: 0 })
    .withMessage('username minimum 8 characters')
    .custom(async value => {
      const user = await userModel.findOne({ username: value })
      if (user) return Promise.reject('username already used')
    }),
  body('password')
    .exists()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password minimum 8 characters'),
  body('confirmPassword')
    .exists()
    .withMessage('confirm password is required')
    .isLength({ min: 8 })
    .withMessage('confirmPassword minimum 8 characters')
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error('confirmPassword not match')
      return true
    }),
  body('displayName')
    .exists()
    .withMessage('displayname is required')
    .isLength({ min: 8 })
    .withMessage('displayName minimum 8 characters'),
  requestHandler.validate,
  userControllers.signup,
)

router.post(
  '/signin',
  body('username').isLength({ min: 8 }).withMessage('username minimum 8 characters'),
  body('password')
    .exists()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password minimum 8 characters'),
),
  body('confirmPassword')
    .exists()
    .withMessage('confirmPassword is required')
    .isLength({ min: 8 })
    .withMessage('confirmPassword minimum 8 characters')
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error('confirmPassord not match')
      return true
    }),
  body('displayName').isLength({ min: 8 }).withMessage('displayName minimum 8 characters'),
  requestHandler.validate,
  userControllers.signin

router.put('/update-password')

export default router
