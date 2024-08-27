import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

export const PostContext = createContext();

export const usePostContext=()=>{
    return useContext(PostContext);
}

export const PostContextProvider = ({children})=>{
    const [posts,setPosts] = useState([]);

    const addPost = (post) =>{
        setPosts([...posts,post]);
    }

    const updatePost = (id,updatedPost) =>{
        setPosts(posts.map(post => post._id === id ? updatedPost : post));
    }

    const deletePost = (id) =>{
        setPosts(posts.filter(post => post._id !== id));
    }

    return (
        <PostContext.Provider value={{posts,addPost,updatePost,deletePost}}>
            {children}
        </PostContext.Provider>
    )

}

PostContextProvider.propTypes= {
    children: PropTypes.node.isRequired,
}