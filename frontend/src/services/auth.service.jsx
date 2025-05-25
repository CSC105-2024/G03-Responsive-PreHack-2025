import {createUser, fetchUser, login, logout} from "@/apis/auth.api.jsx";

export const signUp = async ({ username, surname, email, password, department, role }) => {
    const body = { username, surname, email, password, department, role };
    return await createUser(body);
};

export const signIn = async ({ username, password }) => {
    const body = { username, password };
    return await login(body);
};

export const fetch = async () => {
    return await fetchUser();
}

export const signOut = async () => {
    return await logout();
}