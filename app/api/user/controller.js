import _ from 'lodash'
import {success, notFound} from '../../services/response'

class UserController{
    
    constructor(user) {
        this.User = user;
    }

    get(req, res){
        return this.User.find({})
        .then(user => user.map((user) => user.view(true)))
        .then(success(res,201))
        .catch(err => res.status(400).json(err.message))
    }

    post(req, res){
        return this.User.create(req.body)
        .then(user => user.view(true))
        .then(success(res,201))
        .catch(err => res.status(400).json(err.message))
    }

    getOne(req, res){
        return this.User.findById(req.params.id)
        .then(user => user.view(true))
        .then(success(res,201))
        .catch(err => res.status(400).json(err.message))
    }
}

export default UserController



// export const show = ({ params }, res, next) =>
//     User.find({})
//     .then(notFound(res))
//     .then(user => user.map((user) => user.view(true)))
//     .then(success(res,201))
//     .catch(next)