import { Router } from 'express'
import UserController from './controller'
import User from './model'

const router = new Router()
const userController = new UserController(User)

router.get('/', (req, res) => userController.get(req, res))
router.post('/', (req, res) => userController.post(req, res))
router.get('/:id', (req, res) => userController.getOne(req, res))

export default router
