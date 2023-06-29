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
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const specBlog = await Blogs.findById(id);
    return res.json(specBlog).end();
  } catch(err) {
    console.log(err, "err")
  }
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
