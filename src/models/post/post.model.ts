import mongoose, { Schema } from 'mongoose';
import User from '../user/user.model';

const UserSchema: Schema = new Schema({
        title: {
            type: String,
            required: [true, 'Judul wajib diisi']
        },
        content: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: User,
            required: true
        }
    }, {
        timestamps: true
    });

export default mongoose.model('Post', UserSchema);