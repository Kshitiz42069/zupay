import Post from '../models/post.js'
import User from '../models/user.js'

export const getallposts = async(req,res)=>{
    try {
        const posts = await Post.find().populate('author','fullname');
        const postSummary = posts.map(post =>({
            _id:post._id,
            title: post.title,
            author: post.author,
            image: post.image,
            category: post.category,
            description: post.description.length > 40 ? post.description.substring(0, 40) + '...' : post.description,
            createdAt: post.createdAt 
        }));
        res.json(postSummary);
    } catch (error) {
        console.log('error in the get all post function',error);
        res.status(500).json({error:'internal server error'});
    }
}

export const getpostdetails = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id).populate('author','fullname');

        if(!post){
            return res.status(400).json({message:'post does not exists'});
        }
        res.json(post);
    } catch (error) {
        console.log('error in the get post detail function');
        res.status(500).json({error:"internal server error"});
    }
}

export const createposts = async(req,res)=>{
    try {
        const { title, description, category } = req.body;
        const imageURL = req.file.path;
    
        const newPost = new Post({
          title,
          description,
          image:imageURL,
          category,
          author: req.userId
        });
    
        // await newPost.save();
        // res.status(201).json(newPost);

        const savedPost = await newPost.save();
        await User.findByIdAndUpdate(req.userId, {
          $push: { posts: savedPost._id },
        });
        res.status(201).json(savedPost);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
}

export const updatepost = async(req,res)=>{
    try {
        const {title,description, image, category} = req.body;
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({message:'post does not exists'});
        }
        if(post.author.toString()!== req.userId){
            return res.status(403).json({message:'unauthorized:you do not own this post'});
        }
        post.title = title || post.title;
        post.description = description || post.description;
        post.image = image || post.image;
        post.category = category || post.category;

        await post.save();
        res.json(post);
    } catch (error) {
        console.log('error in the updating function',error);
        res.status(500).json({error:'internal server error'});
    }
}

export const deletepost = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            res.status(404).json({message:"post does not exist for deleting"});
        }

        if(post.author.toString() !== req.userId){
            res.status(403).json({message:"unauthorised: you do not have permission to delete"});
        }
        await post.deleteOne();
        res.json({message:"post removed"});
    } catch (error) {
        console.log('error in the deleting post function',error);
        res.status(500).json({error:'internal server error'});
    }
}