const { Blog } = require("../models/blog");

class BlogController {
  static async allBlogs(req, res) {
    try {
      const result = await Blog.findAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async findOneBlog(req, res) {
    const id = req.params.id;
    try {
      const findOne = await Blog.findById(id);
      if (!findOne) {
        return res.status(404).json(`'${id}' not found!`);
      }

      res.status(200).json(findOne);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async createNewBlog(req, res) {
    const { blogName, blogDescription, blogDate } = req.body;

    try {
      const found = await Blog.findOne({
        blogName: blogName,
      });
      if (found) {
        res.status(409).json("Blog already exist!");
      } else {
        const newBlog = await Blog.create({
          blogName,
          blogDescription,
          blogDate,
        });
        res.status(201).json(newBlog);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateExistingBlog(req, res) {
    const id = req.params.id;

    let obj = {};
    for (let input in req.body) {
      obj[input] = req.body[input];
    }

    try {
      const newUpdate = await Blog.findByIdAndUpdate(
        id,
        {
          $set: obj,
        },
        { new: true }
      );
      res.status(200).json(newUpdate);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteBlog(req, res) {
    const id = req.params.id;
    try {
      const del = await Blog.findByIdAndDelete(id);
      res.status(202).json(del);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BlogController;
