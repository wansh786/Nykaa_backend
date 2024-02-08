const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    title:String,
    category:{type:String,enum:['Development', 'Design', 'Innovation', 'Tutorial', 'Bussiness'],default:"Bussiness"},
    content:String,
    no_of_comments:Number,
    name:String,
    image:String,
    userID:String
},{
    version_key:false
})

const PostModel=mongoose.model("post",PostSchema);

module.exports={
    PostModel
}