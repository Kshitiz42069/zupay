import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePostContext } from "../context/PostContext";


function UseUserPosts(userId) {
    const [loading,setLoading] = useState(false);
    const {setPosts} = usePostContext();

    const userposts = async()=>{
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/api/userposts/${userId}`);
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
    };
    useEffect(() => {
        if (userId) {
            userposts();
        }
    }, []);
  return {loading,userposts};
}

export default UseUserPosts