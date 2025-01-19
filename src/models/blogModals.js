import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    blogName: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})



export const Blog = mongoose.model("Blog", blogSchema)
