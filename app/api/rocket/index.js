import { Router } from 'express'
import RocketController from './controller'
import Rocket from './model'

const router = new Router()
const rocketController = new RocketController(Rocket)

router.get('/', (req, res) => rocketController.get(req,res))
router.post('/', (req,res) => rocketController.post(req,res))

export default router