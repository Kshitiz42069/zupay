import express from 'express'
import { getallposts,getpostdetails,createposts,updatepost,deletepost, userPosts } from '../controller/postController.js';
import protectedRoute from '../middleware/protectedRoute.js';
import upload from '../utils/multerConfig.js'

const router = express.Router();

//get post details
router.get('/posts',getallposts);
router.get('/posts/:id',getpostdetails);
router.get('/userposts/:id',userPosts);

//middleware should be used as we are implementing changes in the blogs post

//create posts
router.post('/posts',protectedRoute,upload.single('image'),createposts);

//update posts
router.put('/posts/:id',protectedRoute,upload.single('image'),updatepost);

//delete posts
router.delete('/posts/:id',protectedRoute,deletepost);

export default router;