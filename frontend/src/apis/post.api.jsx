import { post, get } from '../utils/api.util.jsx';

export const createPost = (body) => post('/posts', body);
export const getPost = () => get('/posts/all');