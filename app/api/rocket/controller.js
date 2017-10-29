import _ from 'lodash'
import {success, notFound} from '../../services/response'

class rocketController {
    constructor(rocket){
        this.Rocket = rocket
    }

    get(req, res){
        return this.Rocket.find({})
        .then(rockets => rockets.map((rocket) => rocket.view(true)))
        .then(success(res,201))
        .catch(err => res.status(400).json(err.message))
    }

    post(req,res){
        return this.Rocket.create(req.body)
        .then(user => user.view(true))
        .then(success(res,201))
        .catch(err => res.status(400).json(err.message))
    }
}

export default rocketController