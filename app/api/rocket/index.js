import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import Rocket from './model'
import { index, showID, create } from './controller'

const router = new Router()

router.get('/',
query({
    name: {
        name: Rocket.name
    },
    material: {
        material: Rocket.material
    },
    color: {
        color: Rocket.color
    }
})
,index)

router.post('/',
body({
    name: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}), create)

router.get('/:id', showID)

export default router