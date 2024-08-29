import { useState } from 'react'
import toast from 'react-hot-toast';

function UseGetPost(postId) {
    const [loading ,setLoading] = useState(false);
    const [post,setPost] = useState(null);

    const postDetail = async()=>{
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/api/posts/${postId}`);
            const data = res.json();
            if(data.error){
                throw new Error(data.errro);
            }            
            setPost(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }

    }
  return {loading,postDetail,post};
}

export default UseGetPost;