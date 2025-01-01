const express = require('express');
const Blog = require('../models/blogModel.js');
const router = express.Router();


router.route('/posts')
      .post(async(req,res)=>{//HTTP POST
        try {
            const blog = await Blog.create(req.body);
            res.status(201).json(blog);
        } catch (error) {
            console.log(error);
            res.status(400).json({ERROR: error.message});
        }
    }).get(async(req,res)=>{//HTTP GET
        try {
            const blog = await Blog.find({});
            res.status(201).json(blog);
        } catch (error) {
            console.log(error);
            res.status(400).json({ERROR: error.message});
        }
    })


router.route('/posts/:id')
      .get(async(req,res)=>{//HTTP GET SINGLE BLOG
        try {
            const {id} = req.params;
            const singleBlog = await Blog.findById(id);
            res.status(201).json(singleBlog);
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ERROR: error.message});
        }
    }).put(async(req,res)=>{//HTTP PUT
        try {
            const {id} = req.params;
            const updateBlog = await Blog.findByIdAndUpdate(id, req.body);
            if(!updateBlog){
                console.log({ERROR: `id with number ${id} does not exist`});
            }
            else{
                const newlyUpdatedBlog = await Blog.findById(id);
                res.status(201).json(newlyUpdatedBlog);
            }
            
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ERROR: error.message});
        }
    }).delete(async(req,res)=>{
        try {
            const {id} = req.params;
            const deleteBlog = await Blog.findByIdAndDelete(id);

            if(!deleteBlog){
                res.status(400).json({ERROR: `Blog with id ${id} does not exist`});
                console.log(`Blog with id ${id} does not exist`);
            }
            else{
                res.status(201).json(deleteBlog);
                console.log("Blog successfully deleted");
            }
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ERROR: error.message});
        }
    })

module.exports = router;