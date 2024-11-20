const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
        name: { type: String, required: true },
        email: { type: String, required: true }
    },
    tags: { type: String, required: true },
    comments: [
        {
            user: { type: String, required: true },
            comment: { type: String, required: true },
            date: { type: Date, default: Date.now }
        }
    ],
    isPublished: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;