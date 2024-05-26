import express from 'express'
import personController from '../controllers/person.controller'

const router = express.Router({ mergeParams: true })

router.get('/:personId/medias', personController.personMedias)
router.get('/:personId/detail', personController.personDetail)

export default router
