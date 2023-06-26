const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    Title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    Description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    MainContent: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    Image: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    Date: {
        type: Date,
        default: Date.now()
    },
})

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;