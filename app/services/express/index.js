import express from 'express'
import bodyParser from 'body-parser'
import {errorHandler as queryErrorHandler} from 'querymen'
import {errorHandler as bodyErrorHandler} from 'bodymen'

export default (routes) => {
    const app = express()

    app.use(bodyParser.json())
    app.use(routes)
    app.use(queryErrorHandler())
    app.use(bodyErrorHandler())
    return app
}