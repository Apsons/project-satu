const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    blogName: {
      type: String,
      required: true,
    },
    blogDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const blog = mongoose.model("Blog", blogSchema);

exports.Blog = blog;
