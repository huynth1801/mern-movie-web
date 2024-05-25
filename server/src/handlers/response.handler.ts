import { Response } from 'express'

interface SuccessResponse<T> {
  status: number
  data: T
}

// Define a type for an error response
interface ErrorResponse {
  status: number
  message: string
}

const responseData = <T>(res: Response, statusCode: number, data: T): Response => {
  return res.status(statusCode).json(data)
}

const error = (res: Response): Response => {
  const errorResponse: ErrorResponse = {
    status: 500,
    message: 'Something went wrong!',
  }
  return responseData(res, 500, errorResponse)
}

const badRequest = (res: Response, message: string): Response => {
  const errorResponse: ErrorResponse = {
    status: 400,
    message,
  }
  return responseData(res, 400, errorResponse)
}

const ok = <T>(res: Response, data?: T): Response => {
  const successResponse: SuccessResponse<T> = {
    status: 200,
    data: data!,
  }
  return responseData(res, 200, successResponse)
}

const created = <T>(res: Response, data: T): Response => {
  const successResponse: SuccessResponse<T> = {
    status: 201,
    data,
  }
  return responseData(res, 201, successResponse)
}

const unauthorize = (res: Response): Response => {
  const errorResponse: ErrorResponse = {
    status: 401,
    message: 'You are unauthorized',
  }
  return responseData(res, 401, errorResponse)
}

const notFound = (res: Response): Response => {
  const errorResponse: ErrorResponse = {
    status: 404,
    message: 'Resource not found',
  }
  return responseData(res, 404, errorResponse)
}

export default { error, badRequest, ok, unauthorize, created, notFound }
