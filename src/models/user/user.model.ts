import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
        name: {
            type: String,
            required: [true, 'Nama wajib diisi']
        },
        address: String,
        family: String
    }, {
        timestamps: true
    });

export default mongoose.model('User', UserSchema);