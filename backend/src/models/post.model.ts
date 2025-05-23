import {prisma} from "../index.js";
import {HTTPException} from "hono/http-exception";
import {type Post, Roles} from "../types/index.js";

class PostModelLo {
    async create (role: Roles, data: Post ,id: number) {
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

        function isTimeFormat(time: string): boolean {
            const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
            return regex.test(time);
        }
        
        if (!isTimeFormat(data.start_time) || !isTimeFormat(data.end_time)) {
            throw new HTTPException(400, {
                message: 'Invalid start_time or end end_time [HH:MM]',
            });
        }
        
        return prisma.posts.create({
            data:{
                start_time: data.start_time,
                end_time: data.end_time,
                post_date: parsedDate,
                doctor: {
                    connect :{
                        id: id
                    }
                }
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
    
    async findMany () {
        const post =  await prisma.posts.findMany({
            where: {
                confirms: {
                    none: {}
                }
            },
            include: {
                doctor: true
            }
        });
        // if (post.length === 0) {
        //     throw new HTTPException(404,{
        //         message: 'No post found',
        //     })
        // }
        return post;
    }   
}

const PostModel = new PostModelLo();
export {PostModel};