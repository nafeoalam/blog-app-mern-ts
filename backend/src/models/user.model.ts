import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
const salt: string = '12';

interface IUser extends Document {
    email: string;
    password: string;
}
const userSchema: Schema<IUser> = new Schema({
    id: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

export default mongoose.model('User', userSchema);
