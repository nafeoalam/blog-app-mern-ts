import mongoose, { Schema, Document } from 'mongoose';

interface IBlog extends Document {
    title: String;
    content: String;
    create_date: Date;
    comments?: Array<object>;
}

const blogSchema: Schema<IBlog> = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            content: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
        }
    ]
});

export default mongoose.model('Blog', blogSchema);
