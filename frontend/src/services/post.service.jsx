import {createPost, getPost} from "../apis/post.api.jsx";

export const newPost = async ({start_time, end_time, post_date}) => {
    const body = {start_time, end_time, post_date}
    return await createPost(body);
}

export const getAllPost = async () => {
    return await getPost();
}