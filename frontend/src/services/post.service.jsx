import {createPost, getPost, getPostDoctor, deletePost} from "../apis/post.api.jsx";

export const newPost = async ({start_time, end_time, post_date}) => {
    const body = {start_time, end_time, post_date}
    return await createPost(body);
}

export const getAllPost = async () => {
    return await getPost();
}

export const getPostDoctorSer = async () => {
    return await getPostDoctor();
}

export const deletePostSer = async ({id}) => {
    const body = {id};
    return await deletePost(body);
}

