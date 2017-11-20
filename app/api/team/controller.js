import _ from 'lodash'
import Team from './model'
import {success, notFound} from '../../services/response'

export const index = ({ querymen: {query,select,cursor} , res, next }) =>{
    Team.find(query,select,cursor)
    .populate('rocket')
    .populate('users')
    .then(notFound(res))
    .then(teams => teams.map((team) => team.view(true)))
    .then(success(res,201))
    .catch(next)
}

export const create = ({ bodymen: { body } }, res, next) => {
    Team.create(body)
    .then(notFound(res))
    .then(teams => teams.view(true))
    .then(success(res,201))
    .catch(next)
}

export const showID = ({ params }, res, next) => {
    Team.findById(params.id)
    .populate('rocket')
    .populate('users')
    .then(notFound(res))
    .then(teams => teams.view(true))
    .then(success(res,201))
    .catch(next)
}