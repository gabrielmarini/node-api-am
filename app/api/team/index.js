import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import Team from './model'
import User from '../user/model'
import Rocket from '../rocket/model'
import { index, create, showID } from './controller'

const router = new Router()

router.get('/',query({
    name: {
        name: Team.name
    }
}), index)

router.post('/',
body({
    name: {
        type: String,
        required: true
    },
    users: {
        type: [String],
        required: true
    },
    rocket: {
        type: String,
        required: true
    }
}), create)

router.get('/:id', showID)

export default router