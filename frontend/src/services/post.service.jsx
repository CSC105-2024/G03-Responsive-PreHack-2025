import {
    create_api,
    getPost_api,
    getPostDoctor_api,
    delete_api
} from "../apis/post.api.jsx";

export const newPost = async ({start_time, end_time, post_date}) => {
    const body = {start_time, end_time, post_date}
    return await create_api(body);
}

export const getAllPost = async () => {
    return await getPost_api();
}

export const getPostDoctorSer = async () => {
    return await getPostDoctor_api();
}

export const deletePostSer = async ({id}) => {
    const body = {id};
    return await delete_api(body);
}

