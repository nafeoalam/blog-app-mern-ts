import mongoose, { Schema, Document } from 'mongoose';

export interface IComment {
    commentId: string;
    name: string;
    text: string;
    date?: string;
    comments?: Array<IComment>;
}

interface IBlog extends Document {
    title: String;
    content: String;
    create_date: Date;
    comments?: Array<IComment>;
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
            name: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true,
                default: Date.now
            },
            commentId: {
                type: String
            },
            comments: {
                type: Array
            }
            // TODO
            // userId: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: 'User'
            // },
        }
    ]
});

export default mongoose.model('Blog', blogSchema);
