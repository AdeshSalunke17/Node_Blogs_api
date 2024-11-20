const Blog = require('../models/blog');

//api handlers
const handleAddBlog = async (req , resp) => {
    try {
         const blog = req.body;
         if(blog) {
            const result = await Blog.create(blog);
            return resp.status(201).json({ message: 'Blog created successfully', data: result });
         }
        
    } catch (error) {
        console.log('failed while adding blog: error => ', error);
        return resp.status(400).json({ message: 'Failed to create blog', error: error.message });
    }
}

const handleAddManyBlogs = async (req, resp) => {
    try {
        const result = await Blog.insertMany(req.body);
        if(result) {
            return resp.status(201).json({ message: 'Blog created successfully', data: result });
        }
        
    } catch (error) {
        console.log('failed while adding multiple blogs: error => ', error);
        return resp.status(400).json({ message: 'Failed to create blog', error: error.message });
    }
}

const handleFindBlogById = async (req, resp) => {
    const id = req.params.id;
    try {
        const result = await Blog.findById(id);
        if(result) {
            return resp.status(200).json({ message: 'Blog successfully fetched', data : result });
        } else {
            return resp.status(404).json({ message: 'Blog not found' });
        }
        
    } catch (error) {
        console.log('failed while fetching blog: error => ', error);
        return resp.status(400).json({ message: 'Failed to fetch blog', error: error.message });
    }
}

const handleDeleteBlogById = async (req, resp) => {
    const blogId = req.params.id;
    try {
        if(blogId) {
            const result = await Blog.findByIdAndDelete(blogId);
            if(result) {
                resp.status(200).json({ message: 'Blog deleted successfully', data: result });
            } else {
                return resp.status(404).json({ message: 'Blog not found' });
            }
        }
    } catch (error) {
        resp.status(400).json({ message: 'Failed to delete blog', error: error.message });
    }
    
}

const handleUpdateBlogById = async (req, resp) => {
    const blogId = req.params.id;
    const updateBlog = req.body;
    try {
        if(blogId && updateBlog) {
            const blog = await Blog.findByIdAndUpdate(blogId, updateBlog, {new : true});
            if (!blog) {
                return resp.status(404).json({ message: 'Blog not found' });
            }
            resp.status(200).json({ message: 'Blog updated successfully', data: blog });
        }
    } catch (error) {
        resp.status(400).json({ message: 'Failed to update blog', error: error.message });
    }
}

module.exports = {
    handleAddBlog,
    handleAddManyBlogs,
    handleFindBlogById,
    handleDeleteBlogById,
    handleUpdateBlogById
}