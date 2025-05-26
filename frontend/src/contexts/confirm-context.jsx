import {
    createContext,
    useContext, useEffect,
    useState,
} from 'react';
import {newConfirm, getConfirm} from "@/services/confirm.service.jsx";
import { usePost } from "@/contexts/post-context";

const ConfirmContext = createContext();

export const ConfirmProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(null);
    const [error, setError] = useState("");
    const { getPost } = usePost();
    useEffect(() => {
        const fetchConfirm = async () => {
            setLoading(true)
            try {
                const response = await getConfirm();
                if (response.success) {
                    setConfirm(response?.data?.data);
                }
            } catch (error) {
                setError(error.response?.error);
            } finally {
                setLoading(false);
            }
        }
        fetchConfirm();
    }, [])
    
    const createConfirm = async ({postId}) => {
        try {
            setLoading(true);
            const response = await newConfirm({ postId });
            if (response.success) {
                const allConfirms = await getConfirm();
                setConfirm(allConfirms?.data?.data);
                getPost();
            }
        } catch (error) {
            setConfirm(null);
            setError(error?.response?.error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <ConfirmContext.Provider value={{
            loading,
            confirm,
            error,
            createConfirm,
        }}>
            {children}
        </ConfirmContext.Provider>
    );
};

export const useConfirm = () => {
    const context = useContext(ConfirmContext);
    if (!context) {
        throw new Error('useConfirm must be used within a AuthProvider');
    }
    return context;
};
