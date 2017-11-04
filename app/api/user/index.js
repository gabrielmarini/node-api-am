import { Router } from 'express'
import User from './model'
import { show, showId, insertPost } from './controller'

const router = new Router()

router.get('/', show)
router.post('/', insertPost)
router.get('/:id', showId)

export default router
