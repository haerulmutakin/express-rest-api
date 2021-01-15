import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    name: {
        type: String
    },
    address: String,
    organization: {
        type: String,
        required: [true, 'Parameter organisasi wajib diisi']
    }
});

export default mongoose.model('User', UserSchema);