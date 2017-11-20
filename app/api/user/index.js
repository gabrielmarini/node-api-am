import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import User from './model'
import { index, showId, create } from './controller'

const router = new Router()

router.get('/', query({
    name: {
        name: User.name
    },
    email: {
        email: User.email
    },
    rm: {
        rm: User.rm
    }
}), index)

router.post('/',
body({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rm: {
        type: Number,
        required: true,
        index: true
    },
    location: {
        type: String,
        required: true
    } 
}), create)

router.get('/:id', showId)

export default router
