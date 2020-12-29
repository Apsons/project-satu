const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema(
    {
        blogName: {
            type: String,
            required: true
        },
        blogDescription: {
            type: String,
            required: true
        },
        blogDate: {
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        }
    },
    {
        timestamps: true
    }
)

const blog = mongoose.model("Blog", blogSchema);

exports.Blog = blog;
