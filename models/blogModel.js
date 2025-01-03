const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required: false
    },
    tags:{
        type: Array,
        required: false
    }
},
{
    timestamps: true
}
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

