import { Router } from 'express'
import { show, showID, insertPost } from './controller'

const router = new Router()

router.get('/', show)
router.get('/:id', showID)
router.post('/', insertPost)

export default router