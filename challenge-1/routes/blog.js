const express = require('express');
const router = express.Router();
const BlogController = require("../controllers/blog");

router.get('/', BlogController.allBlogs);
router.get('/', BlogController.findOneBlog);
router.post('/', BlogController.createNewBlog);
router.put('/:id', BlogController.updateExistingBlog);
router.delete('/:id', BlogController.deleteBlog);

module.exports = router