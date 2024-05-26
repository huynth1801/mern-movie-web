import express from 'express'
import mediaControllers from '../controllers/media.controllers'

const router = express.Router()

router.get('/search', mediaControllers.search)

router.get('/genres', mediaControllers.getGenres)

router.get('/detail/mediaId', mediaControllers.getDetail)

router.get('/:mediaCategory', mediaControllers.getList)

export default router
