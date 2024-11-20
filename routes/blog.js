const express = require('express');
const { handleAddBlog, handleAddManyBlogs, handleFindBlogById, handleDeleteBlogById, handleUpdateBlogById } = require('../controllers/blog');
const blogRouter = express.Router();

blogRouter
.post('/', handleAddBlog)
.post('/many', handleAddManyBlogs)
.get('/:id' , handleFindBlogById)
.delete('/:id', handleDeleteBlogById)
.patch('/:id', handleUpdateBlogById)

module.exports = blogRouter;