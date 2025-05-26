import React, { createContext, useContext, useEffect, useState } from "react";
import {
  newPost,
  getAllPost,
  getPostDoctorSer,
  deletePostSer,
} from "../services/post.service";
import { useAuth } from "@/contexts/auth-context.jsx";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
    date: null,
    time: "",
    symptoms: "",
  });

  const getPost = async () => {
    setLoading(true);
    try {
      const response =
          user?.[0]?.role === "DOCTOR"
              ? await getPostDoctorSer()
              : await getAllPost();
      if (response.success) {
        setPost(response?.data?.data);
      }
    } catch (error) {
      setError(error.response?.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [user]);

  const createPost = async ({ start_time, end_time, post_date }) => {
    try {
      setLoading(true);
      const response = await newPost({ start_time, end_time, post_date });
      if (response.success) {
        const allPosts = await getAllPost();
        setPost((prev) => [...prev, allPosts.data.data]);
      }
    } catch (error) {
      setPost(null);
      setError(error?.response?.error);
    } finally {
      setLoading(false);
    }
  };

  const deletePostUser = async ({ id }) => {
    try {
      setLoading(true);
      const response = await deletePostSer({ id });
      if (response.success) {
        const allPosts = await getAllPost();
        setPost(allPosts?.data?.data);
      }
    } catch (error) {
      setError(error?.response?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostContext.Provider
      value={{
        loading,
        error,
        post,
        createPost,
        deletePostUser,
        filters,
        setFilters,
        getPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};