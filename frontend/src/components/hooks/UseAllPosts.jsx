import { useState } from "react";
import { usePostContext } from "../context/PostContext";
import toast from "react-hot-toast";


const UseAllPosts = () => {
    const [loading,setLoading] = useState(false);
    const {setPosts} = usePostContext();

    const allPosts = async()=>{
        setLoading(true);
        try {
            const res = await fetch('http://localhost:8000/api/posts',{
                method:"GET",
                headers:{"Content-Type":"application/json"}
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setPosts(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
  return {loading,allPosts};
}

export default UseAllPosts