const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

// To save the posts
router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:'Posts save successfully Thank You!'
        })
    })
})

router.get('/posts',(req, res)=>{
    Posts.find().exec((err, posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    })
})

module.exports = router;