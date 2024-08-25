import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Reference to the Post model
    }]
},{
    timestamps:true
});

const User = mongoose.model("User",userSchema);

export default User;