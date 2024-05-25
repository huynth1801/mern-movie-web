import responseHandler from 'handlers/response.handler.js'
import RequestWithUser from 'interfaces/requestWithUser.interface.js'
import tmdbApi from 'tmdb/tmdb.api.js'
import { PersonDetailResponse } from '../types/tmdbApi.type'
import { Response } from 'express'

interface GetPersonDetailType {
  personId: number
}

const personDetail = async (req: RequestWithUser, res: Response) => {
  try {
    const { personId } = req.params as unknown as GetPersonDetailType
    const person = await tmdbApi.personDetail({ personId })

    responseHandler.ok(res, person)
  } catch {
    responseHandler.error(res)
  }
}

const personMedias = async (req: RequestWithUser, res: Response) => {
  try {
    const { personId } = req.params as unknown as GetPersonDetailType
    const person = await tmdbApi.personMedias({ personId })

    responseHandler.ok(res, person)
  } catch {
    responseHandler.error(res)
  }
}

export default { personDetail, personMedias }
