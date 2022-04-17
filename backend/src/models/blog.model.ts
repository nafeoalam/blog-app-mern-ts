import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Blog', blogSchema);
