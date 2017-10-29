import mongoose, { Schema } from 'mongoose'

const rocketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

rocketSchema.methods = {
    view(full){
        const view = {
            id: this.id,
            name: this.name,
            material: this.material,
            color: this.color
        }

        return view
    }
}

const model = mongoose.model('Rocket', rocketSchema)

export const schema = model.schema
export default model