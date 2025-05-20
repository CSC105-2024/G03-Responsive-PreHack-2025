import {prisma} from "../index.js";
import {HTTPException} from "hono/http-exception";
import {type Post, Roles} from "../types/index.js";

class PostModelLo {
    async create (role: Roles, data: Post) {
        if (role !== Roles.DOCTOR) {
            throw new HTTPException(403,{
                message: `This ${role} doesn't have permission to create`
            })
        }

        const parsedDate = new Date(data.post_date);
        if (isNaN(parsedDate.getTime())) {
            throw new HTTPException(400, {
                message: 'Invalid date [YYYY-MM-DD]',
            });
        }

        return prisma.posts.create({
            data:{
                department: data.department,
                post_date: parsedDate,
            }
        })
    }

    async findByQuery (sym?: string, date?: string) {
        const where: any = {};

        if (sym) {
            where.department = sym;
        }
        if (date) {
            const parsedDate = new Date(date);
            if (isNaN(parsedDate.getTime())) {
                throw new HTTPException(400, {
                    message: 'Invalid date [YYYY-MM-DD]',
                });
            }
            where.post_date = parsedDate;
        }

        return  prisma.posts.findMany({ where });
    }
}

const PostModel = new PostModelLo();
export {PostModel};