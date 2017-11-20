import _ from 'lodash'
import User from './model'
import {success, notFound} from '../../services/response'

export const index = ({ querymen: {query,selct,cursor} }, res, next) => {
    User.find(query,selct,cursor)
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

export const create = ({ bodymen: {body}}, res, next) => {
    User.create(body)
    .then(user => user.view(true))
    .then(success(res,201))
    .catch(next)
}