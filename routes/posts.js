const express = require('express');
//import the model u want to post
const router = express.Router();
const Post = require('../models/Post');
const tablet = require('../models/course');
//we can work here
// router.get('/', async (req,res)=>{
//     try{
//   const posts= await Post.find();
//   console.log("post ", posts)
//     res.json(posts);
//  }
//  catch(err){
//      res.json({message:err});
//  }
// });    

router.get('/', (req, res) => {
    Post.find({
            "title": "test"
        }, {
            _id: 1
        })
        .then(function (postDetail) {
            res.send(postDetail);
        }).catch(err => {
            res.send(err.message);
        });

});
router.post('/test', (req, res) => {
    Post.find({
            "title": req.body.title
        }, {
            _id: 1
        })
        
        .then(function (postdel) {
            tablet.create({
                "name":req.body.name,
                "s_id":postdel[0]._id
            })
            .then( function(tabletdet)
            {
                res.send(tabletdet)
            })
            .catch(function(err){
                res.send("err")
            });
            
            //  res.send(postdel[0]._id);
        }).catch(err => {
            res.send(err);
        });

    // res.send(req.body)
})
//const tab =new tablet({
// "name":"aman",
// "s_id":"2"
//});


router.post('/', async (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const post = Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({
            message: err
        });
    }

});
//req.body is used for taking input 
//req.param is sent id over networ
router.delete('/:postId', async (req, res) => {
    try {
        res.json(removedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
//update a post
router.patch('/:PostId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({
            _id: req.params.postId
        }, {
            $set: {
                title: req.body.title
            }
        });
        res.json(updatedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
module.exports = router;
// bascially try an catch used to test the code if there is error in try than it goes to catch and then catch handle