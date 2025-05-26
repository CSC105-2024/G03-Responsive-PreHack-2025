import {get, post} from "@/utils/api.util.jsx";

export const getConfirm_api = () => get('/confirms');
export const create_api = (body) => post('/confirms', body);