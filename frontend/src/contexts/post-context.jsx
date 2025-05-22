import React, {createContext, useContext, useEffect, useState} from 'react';
import { newPost, getAllPost } from '../services/post.service';
import {useLocation} from "react-router";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [error, setError] = useState("");
    const location = useLocation();
    
    useEffect(() => {
        const getPost = async () =>{
            try {
                setLoading(true);
                const response = await getAllPost();
                setPost(response);
                console.log(response)
                return response;
            } catch (error) {
                setError(error.response?.error);
            } finally {
                setLoading(false);
            }
        }
        getPost()
    }, [])
    
    const createPost = async ({department, post_date}) =>{
        try {
            setLoading(true);
            const response = await newPost({department, post_date});
            if (response.success) {
                const allPosts = await getAllPost();
                setPost(allPosts);
            }
            return response;
        } catch (error) {
            setError(error.response?.error);
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
