import { Router } from 'express';
import user from './user'
import rocket from './rocket'
import event from './event'
import team from './team'

const router = new Router();

router.use('/users', user)
router.use('/rockets', rocket)
router.use('/events', event)
router.use('/teams', team)

export default router;
