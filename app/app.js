import routes from './api'
import database from './mongoose'
import express from './services/express'

const configureExpress = () =>{
    const app = express(routes)
    return app
}

export default () => database.connect().then(configureExpress)