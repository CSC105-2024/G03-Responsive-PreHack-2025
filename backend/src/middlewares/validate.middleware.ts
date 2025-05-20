import { ZodSchema } from 'zod'
import { zValidator as zv } from '@hono/zod-validator'
import {HTTPException} from "hono/http-exception"

import type { ValidationTargets } from 'hono'
import { createMiddleware } from 'hono/factory'

const validateMiddleware = <
    T extends ZodSchema,
    Target extends keyof ValidationTargets,
>(
    target: Target,
    schema: T,
) => {
    return createMiddleware(async (c, next) => {
        zv(target, schema, (result) => {
            if (!result.success) {
                throw new HTTPException(400,{
                    message: result.error.issues[0].message,
                })
            }
        })
        await next();
    })
}

export { validateMiddleware }