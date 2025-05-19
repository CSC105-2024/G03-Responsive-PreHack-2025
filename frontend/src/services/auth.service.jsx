import { createUser, login } from "@/apis/auth.api.jsx";
import {baseApi} from "@/utils/api.util.jsx";

export const signUp = async ({ username, surname, email, password, role }) => {
    const body = { username, surname, email, password, role };
    return await createUser(body);
};

export const signIn = async ({ username, password }) => {
    const body = { username, password };
    return await login(body);
};