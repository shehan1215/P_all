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

// To Get the Posts
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

// To Update the Posts
router.put('/posts/update/:id',(req, res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Successfully updated"
            })
        }
    )
})


module.exports = router;