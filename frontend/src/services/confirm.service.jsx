import { create_api, getConfirm_api } from "@/apis/confirm.api.jsx";

export const newConfirm = async ({postId}) => {
    const body = {postId}
    return await create_api(body);
}

export const getConfirm = async () => {
    return await getConfirm_api();
}
