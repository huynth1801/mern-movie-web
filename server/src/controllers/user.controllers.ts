import userModel from '../models/user.model'
import jsonwebtoken from 'jsonwebtoken'
import { Request, Response } from 'express'
import responseHandler from '../handlers/response.handler'
import RequestWithUser from '../interfaces/requestWithUser.interface'

const signup = async (req: Request, res: Response) => {
  try {
    const { username, password, displayName } = req.body
    const checkUser = await userModel.findOne({ username })
    if (checkUser) return responseHandler.badRequest(res, 'Username already used')

    const user = new userModel()

    user.displayname = displayName
    user.username = username
    await user.setPassword(password)

    await user.save()

    const token = jsonwebtoken.sign({ data: user.id }, process.env.TOKEN_SECRET!, {
      expiresIn: '24h',
    })

    return responseHandler.created(res, {
      token,
      ...user.toObject(),
      id: user.id,
    })
  } catch (err) {
    console.error(err)
    return responseHandler.error(res)
  }
}

const signin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    const user = await userModel
      .findOne({ username })
      .select('username password salt id displayName')

    if (!user) return responseHandler.badRequest(res, 'User not exist')

    if (!user.validPassword(password)) return responseHandler.badRequest(res, 'Wrong password')

    const token = jsonwebtoken.sign({ data: user.id }, process.env.TOKEN_SECRET!, {
      expiresIn: '24h',
    })

    const { password: _, salt: __, ...userWithoutSensitiveInfo } = user.toObject()

    return responseHandler.created(res, {
      token,
      ...userWithoutSensitiveInfo,
      id: user.id,
    })
  } catch {
    return responseHandler.error(res)
  }
}

const updatePassword = async (req: Request, res: Response) => {
  try {
    const { password, newPassword } = req.body

    const user = await userModel.findOne({ password }).select('password id salt')

    if (!user) return responseHandler.unauthorize(res)

    if (!user.validPassword(password)) return responseHandler.badRequest(res, 'Wrong password')

    user.setPassword(newPassword)

    await user.save()

    return responseHandler.ok(res)
  } catch {
    return responseHandler.error(res)
  }
}

const getInfo = async (req: RequestWithUser, res: Response) => {
  try {
    const user = await userModel.findById(req.user?.id)

    if (!user) return responseHandler.notFound(res)

    return responseHandler.ok(res)
  } catch {
    return responseHandler.error(res)
  }
}

export default { signup, signin, updatePassword, getInfo }
