import _ from 'lodash'
import Event from './model'
import {success, notFound} from '../../services/response'

export const index = ({ querymen: {query,select,cursor} , res, next }) =>{
    Event.find(query,select,cursor)
    .then(notFound(res))
    .then(events => events.map((event) => event.view(true)))
    .then(success(res,201))
    .catch(next)
}

export const create = ({ bodymen: { body } }, res, next) => {
    Event.create(body)
    .then(notFound(res))
    .then(events => events.view(true))
    .then(success(res,201))
    .catch(next)
}

export const showID = ({ params }, res, next) => {
    Event.findById(params.id)
    .then(notFound(res))
    .then(events => events.view(true))
    .then(success(res,201))
    .catch(next)
}