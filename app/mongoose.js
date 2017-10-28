import mongoose from 'mongoose'

mongoose.Promise = Promise

const connect = () => mongoose.connect('mongodb://localhost/fiap',{ useMongoClient: true })

export default { connect }
