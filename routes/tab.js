const express=require('express');
//import the model u want to post
const router=express.Router();
const Post=require('../models/Post');
const tablet=require('../models/course');
//we can work here
router.get('/',async (req,res)=>
{
    try{
        const posts=await tablet.find();//if any error occur it will get into err
        res.json(posts);      
    }
    catch(err){
        res.json({message:err});
    }
    
});

router.post('/',async (req,res)=>{

const post1=new tablet({
    name:req.body.name,
    s_id:req.body.s_id
});
try{
    const savedPost1 = await post1.save();
    res.json(savedPost1);
}
catch (err){
    res.json({message:err});
}
});

router.get('/:postId',async (req,res)=>{
    try{
    const post1 =tablet.findById(req.params.postId);
    res.json(post1);}
    catch(err)
    {
        res.json({message:err});
    }

});
module.exports=router;