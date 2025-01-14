import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
    {
        thumbnail: {
            type: String, //cloudinory url
            required: true

        },
        title: {
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
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

    },
    {
        timestamps: true,
    },
)

export const Blog = mongoose.model("Blog", blogSchema)
