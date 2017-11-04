import _ from 'lodash'
import Rocket from './model'
import {success, notFound} from '../../services/response'

export const show  = (req, res, next) =>{
    Rocket.find({})
    .then(notFound(res))
    .then(rockets => rockets.map((rocket) => rocket.view(true)))
    .then(success(res,201))
    .catch(next)
}

export const showID  = (req, res, next) =>{
    Rocket.findById(req.params.id)
    .then(notFound(res))
    .then(rockets => rockets.view(true))
    .then(success(res,201))
    .catch(next)
}

export const insertPost = (req, res, next) => {
    Rocket.create(req.body)
    .then(notFound(res))
    .then(rocket => rocket.view(true))
    .then(success(res,201))
    .catch(next)
}