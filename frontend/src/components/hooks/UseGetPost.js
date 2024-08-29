import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function UseGetPost(postId) {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (postId) {
            const postDetail = async () => {
                setLoading(true);
                try {
                    const res = await fetch(`http://localhost:8000/api/posts/${postId}`);
                    const data = await res.json(); // Await here to fully resolve the response

                    if (!res.ok) {
                        throw new Error(data.message || 'Error fetching post details');
                    }
                    setPost(data);
                } catch (error) {
                    toast.error(error.message);
                } finally {
                    setLoading(false);
                }
            };

            postDetail();
        }
    }, [postId]);

    return { loading, post}; // Optional: return error if needed
}

export default UseGetPost;
