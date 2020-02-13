const mongoose=require('mongoose');
const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});
//Posts is model which uses postSchema
module.exports=mongoose.model('Posts',PostSchema);