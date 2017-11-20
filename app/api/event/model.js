import mongoose, { Schema } from 'mongoose'

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

eventSchema.methods = {
    view(full){
        const view = {
            id: this.id,
            name: this.name,
            location: this.location,
            date: this.date
        }

        return view
    }
}

const model = mongoose.model('Event', eventSchema)

export const schema = model.schema
export default model