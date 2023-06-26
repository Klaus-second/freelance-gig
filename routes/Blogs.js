const express = require("express");
const router = express.Router();
const Blogs = require("../models/Blogs.js");

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one blog
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const specBlog = Blogs.findById(id, function (err, blog) {
    if (!blog) {
      return res.json("Blog not found :(").end();
    }
    return res.json(blog).end();
  });
});

// Create one blog
router.post("/create", async (req, res) => {
  try {
    console.log(req.body.Title);
    const blog = new Blogs(req.body);
    const newBlog = await blog.save();
    console.log(newBlog);
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
