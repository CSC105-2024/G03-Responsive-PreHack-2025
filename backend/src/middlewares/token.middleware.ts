import { createMiddleware } from "hono/factory";
import { jwtVerify } from "jose";
import { getCookie, deleteCookie } from "hono/cookie";
import { env } from "process";
import { HTTPException } from "hono/http-exception";
import { generateNewJWTAndSetCookie } from "../utils/jwt.util.js";
import { Roles } from "../types/index.js";

const authMiddleware = createMiddleware(async (c, next) => {
    const accessToken = getCookie(c, "accessToken");
    const refreshToken = getCookie(c, "refreshToken");

    if (!accessToken || !refreshToken) {
        throw new HTTPException(401, { message: "Unauthorized" });
    }

    try {
        const {
            payload: { userId, role },
        } = await jwtVerify<{ userId: number, role: Roles }>(
            accessToken,
            new TextEncoder().encode(env.JWT_ACCESS_SECRET)
        );

        c.set("userId", userId);
        c.set("role", role);
        await next();
    } catch {

        try {
            const {
                payload: { userId, role },
            } = await jwtVerify<{ userId: number, role: Roles }>(
                refreshToken,
                new TextEncoder().encode(env.JWT_REFRESH_SECRET)
            );

            await generateNewJWTAndSetCookie(c, userId, role);
            c.set("userId", userId);
            c.set("role", role);
            await next();
        } catch {

            deleteCookie(c, "accessToken", { httpOnly: true });
            deleteCookie(c, "refreshToken", { httpOnly: true });
            throw new HTTPException(401, { message: "Unauthorized " });
        }
    }
});

export { authMiddleware };