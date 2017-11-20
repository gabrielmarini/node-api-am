import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import Event from './model'
import { index, create, showID } from './controller'

const router = new Router()

router.get('/',query({
    name: {
        name: Event.name
    }
}), index)

router.post('/',
body({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}), create)

router.get('/:id', showID)

export default router