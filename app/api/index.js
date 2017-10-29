import { Router } from 'express';
import user from './user'
import rocket from './rocket'

const router = new Router();

router.use('/users', user)
router.use('/rockets', rocket)

export default router;
