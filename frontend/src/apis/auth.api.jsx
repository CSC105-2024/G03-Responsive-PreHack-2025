import { post , get } from "@/utils/api.util.jsx"

export const createUser   = (body) => post('/users', body);
export const login = (body) => post('/login', body);
export const fetchUser = () => get('/users');
export const logout = () => post('/logout');