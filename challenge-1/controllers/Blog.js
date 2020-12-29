const { Blog } = require ('../models/blog');
const mongoose = require('mongoose');

class BlogController {
    static async getBlog(req, res, next) {
        try {
            let blogs = await Blog.find();

            res.status(200).json({
                success: true,
                message: "Success retrive Blog list",
                data: blogs,
            });
        } catch (err) {
            next(err)
        }
    }
}

module.exports = BlogController;
