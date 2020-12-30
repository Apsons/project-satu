const { Blog } = require ('../models/blog');

class BlogController {
    static async allBlogs(req, res) {
        try {
            const result = await Blog.findAll({
                order: [
                    ['id', 'ASC']
                ]
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static async findOneBlog(req, res) {
        const { blogName } = req.body;
        try {
            const findOne = await Blog.findOne({
                where: { blogName }
            });
            if (!findOne) {
                res.status(404).json(`'${blogName}' not found!`)
            } else {
                const blogs = await Blog.findAll({
                    where: {
                        blogName
                    }
                });
                res.status(200).json(blogs);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async createNewBlog(req, res) {
        const { blogName, blogDescription, blogDate } = req.body;

        try {
            const found = await Blog.findOne({
                where: {
                    blogName
                }
            })
            if (found) {
                res.status(409).json("Blog already exist!")
            } else {
                const newBlog = await Blog.create({
                    blogName,
                    blogDescription,
                    blogDate
                })
                res.status(201).json(newBlog)
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async updateExistingBlog(req, res) {
        const id = req.params.id;
        const { blogName, blogDescription, blogDate } = req.body
        try {
            const newUpdate = await Blog.updateOne({
                blogName, blogDescription, blogDate }, {
                    where: { id }
            });
            res.status(200).json(newUpdate);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async deleteBlog(req, res) {
    const id = req.params.id;
        try {
            const del = await Blog.destroy({
                where: { id }
            });
            res.status(202).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = BlogController;
