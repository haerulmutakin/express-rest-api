import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
        username: {
            type: String,
            required: [true, 'Nama wajib diisi']
        },
        firstName: String,
        lastName: String,
        address: String
    }, {
        timestamps: true
    });

export default mongoose.model('User', UserSchema);