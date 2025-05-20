import React, {createContext, useContext, useEffect, useState} from 'react';
import { signUp, signIn, fetch } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const  [user, setUser] = useState(null);
    const  [error, setError] = useState("");
    
    useEffect(() => {
        const checkStatus = async () => {
            try {
                const response = await fetch();
                if (response.success) {
                    setUser(response.data.data);
                }
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        checkStatus();
    }, [])

    const signUpUser = async ({
        username,
        surname,
        email,
        password,
        role,
}) =>{
        try {
            setLoading(true);
            const response = await signUp({username, surname, email, password, role});
            setUser(response);
            return response;
        } finally {
            setLoading(false);
        }
    }
    const signInUser = async ({
        username,
        password,
    }) => {
        try {
            setLoading(true);
            const response = await signIn({username, password})

            if (response.success) {
                setUser(response);
                navigate('/');
            }
            return response;
        } catch(error) {
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            loading,
            user,
            error,
            signUpUser,
            signInUser,
            isAuth: !!user,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};
