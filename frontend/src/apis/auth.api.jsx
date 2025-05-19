import { post , get } from "@/utils/api.util.jsx"

export const createUser   = (body) => post('/users', body);
export const login = (body) => post('/login', body);