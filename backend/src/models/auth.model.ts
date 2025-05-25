import type {Context} from "hono";
import {prisma} from "../index.js";
import {HTTPException} from "hono/http-exception";
import {generateNewJWTAndSetCookie} from "../utils/jwt.util.js";
import {deleteCookie} from "hono/cookie";

class AuthModelLo {
    async login (username: string, password: string, c: Context) {
        const user = await prisma.users.findFirst({
            where: {
                username,
            }
        })

        if (!user || user.password !== password) {
            throw new HTTPException(401, {
                message: "Invalid credentials",
                cause: {form: true},
            })
        }
        await generateNewJWTAndSetCookie(c, user.id, user.role);
        return user
    }
    
    async logout(c: Context) {
        deleteCookie(c, 'accessToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });

        deleteCookie(c, 'refreshToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });
    }
}

const AuthModel = new AuthModelLo();
export {AuthModel};