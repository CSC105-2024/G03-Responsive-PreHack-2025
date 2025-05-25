import { post, get, del } from '../utils/api.util.jsx';

export const create_api = (body) => post('/posts', body);
export const getPost_api = () => get('/posts/all');
export const getPostDoctor_api = () => get('/posts/doctor');
export const delete_api = ({id}) => del('/posts', {params: {id}});