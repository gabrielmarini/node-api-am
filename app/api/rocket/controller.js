import _ from 'lodash'
import Rocket from './model'
import {success, notFound} from '../../services/response'

export const index  = ({querymen: {query, select, cursor}}, res, next) =>{
    Rocket.find(query, select, cursor)
    .then(notFound(res))
    .then(rockets => rockets.map((rocket) => rocket.view(true)))
    .then(success(res,201))
    .catch(next)
}

export const showID  = ({ params }, res, next) =>{
    Rocket.findById(params.id)
    .then(notFound(res))
    .then(rockets => rockets.view(true))
    .then(success(res,201))
    .catch(next)
}

export const create = ({bodymen: { body }}, res, next) => {
    Rocket.create(body)
    .then(notFound(res))
    .then(rocket => rocket.view(true))
    .then(success(res,201))
    .catch(next)
}