import React, {createContext, useContext, useEffect, useState} from 'react';
import { newPost, getAllPost } from '../services/post.service';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [error, setError] = useState("");
    
    useEffect(() => {
        setLoading(true);
        const getPost = async () =>{
            try {
                const response = await getAllPost();
                if (response.success) {
                    setPost(response?.data?.data);
                }
            } catch (error) {
                setError(error.response?.error);
            } finally {
                setLoading(false);
            }
        }
        getPost()
    }, [])
    
    const createPost = async ({start_time, end_time, post_date}) =>{
        try {
            setLoading(true);
            const response = await newPost({start_time, end_time, post_date});
            if (response.success) {
                const allPosts = await getAllPost();
                setPost(allPosts?.data?.data);
            }
        } catch (error) {
            setPost(null);
            setError(error.response.error);
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
