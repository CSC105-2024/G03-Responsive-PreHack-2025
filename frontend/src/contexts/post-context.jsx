import React, {createContext, useContext, useState} from 'react';
import { newPost } from '../services/post.service';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    
    const createPost = (department, post_date) =>{
        setLoading(true);
        return newPost(department, post_date);
    }

    return (
        <PostContext.Provider value={{
            setLoading,
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
