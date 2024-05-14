import { Response, response } from 'express';

const responseData = (res: Response, statusCode: number, data: any): Response => {
    return res.status(statusCode).json(data)
}

const error = (res: Response): Response => {
    return responseData(res, 500, {
        status: 500,
        message: 'Something wrong !'
    })
}

const badRequest = (res: Response, message: string): Response => {
    return responseData(res, 400, {
        status: 400,
        message
    })
}

const ok = (res: Response, data: any): Response => {
    return responseData(res, 200, data);
}

const created = (res: Response, data: any): Response => {
    return responseData(res, 201, data)
}

const unauthorize = (res: Response): Response => {
    return responseData(res, 401, {
        status: 401,
        message: "You are unauthorized"
    })
}

const notFound = (res: Response): Response => {
    return responseData(res, 404, {
        status: 400,
        message: "Resource not found"
    })
}

export default {error, badRequest, ok, unauthorize, created, notFound}