import React, {createContext, useContext, useState} from 'react';
import { newPost } from '../services/post.service';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    
    const createPost = async ({department, post_date}) =>{
        setLoading(true);
        
        let dateString;
        if (post_date) {
            dateString = new Date(post_date.getTime() - (post_date.getTimezoneOffset() * 60000 ))
                .toISOString()
                .split("T")[0];
        }
        return await newPost(department, dateString);
    }

    return (
        <PostContext.Provider value={{
            loading,
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
