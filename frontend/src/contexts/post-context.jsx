import React, {createContext, useContext, useState} from 'react';
import { newPost } from '../services/post.service';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [error, setError] = useState("");
    
    const createPost = async ({department, post_date}) =>{
        try {
            setLoading(true);
            const  response = await newPost({department, post_date});
            setPost(response);
            return response;
        } catch (error) {
            setError(error.response.data.data.error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <PostContext.Provider value={{
            loading,
            error,
            post,
            createPost,
        }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePost must be used within a PostProvider');
    }
    return context;
};
