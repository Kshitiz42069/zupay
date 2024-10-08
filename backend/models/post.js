import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true,
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        //required likhna hai
    }
},{
    timestamps:true
});

const Post = mongoose.model('Post',postSchema);

export default Post;