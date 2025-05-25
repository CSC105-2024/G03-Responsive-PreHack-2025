import { post, get, del } from '../utils/api.util.jsx';

export const createPost = (body) => post('/posts', body);
export const getPost = () => get('/posts/all');
export const getPostDoctor = () => get('/posts/doctor');
export const deletePost = ({id}) => del('/posts', {params: {id}});