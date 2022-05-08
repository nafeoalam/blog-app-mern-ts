import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
    image: string;
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
    },
    image: {
        type: String
    }
});

export default mongoose.model('User', userSchema);
