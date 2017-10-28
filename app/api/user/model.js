import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rm: {
        type: String,
        required: true,
        index: true
    },
    location: {
        type: String,
        required: true
    }   
})

userSchema.methods = {
    view(full){
        const view = {
            id: this.id,
            name: this.name,
            email: this.email,
            rm: this.managerLevel,
            location: this.location
        }

        return view
    }
}

const model = mongoose.model('User', userSchema);

export const schema = model.schema
export default model