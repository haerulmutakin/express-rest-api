import mongoose, { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';

function hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
};

const UserSchema: Schema = new Schema({
        username: String,
        firstName: String,
        lastName: String,
        email: String,
        password: {
            type: String,
            required: true,
            set: hashPassword
        },
        address: String
    }, {
        timestamps: true
    });

export default mongoose.model('User', UserSchema);