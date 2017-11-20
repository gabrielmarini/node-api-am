import mongoose, { Schema } from 'mongoose'
import User from '../user/model'
import Rocket from '../rocket/model'

const teamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    rocket: { 
        type: Schema.Types.ObjectId,
        ref: 'Rocket',
    }
})

teamSchema.methods = {
    view(full){
        const view = {
            id: this.id,
            name: this.name,
            users: this.users,
            rocket: this.rocket
        }

        return view
    }
}

const model = mongoose.model('Team', teamSchema)

export const schema = model.schema
export default model