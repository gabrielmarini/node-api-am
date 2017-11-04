import _ from 'lodash'
import User from './model'
import {success, notFound} from '../../services/response'

export const show = (req, res, next) => {
    User.find({})
    .then(notFound(res))
    .then(user => user.map((user) => user.view(true)))
    .then(success(res,201))
    .catch(next)
}

export const showId = (req, res, next) => {
    User.findById(req.params.id)
    .then(notFound(res))
    .then(user => user.view(true))
    .then(success(res,201))
    .catch(next)
}

export const insertPost = (req, res, next) => {
    User.create(req.body)
    .then(user => user.view(true))
    .then(success(res,201))
    .catch(next)
}