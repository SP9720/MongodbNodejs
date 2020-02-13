const mongoose=require('mongoose');
const PostSch=mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        
    },
    s_id:{
        type:mongoose.Types.ObjectId,
        
        required:true
        
    }

});
//Posts is model which uses postSchema
module.exports=mongoose.model('courses',  PostSch);