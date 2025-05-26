import {prisma} from "../index.js";
import { Roles } from "../types/index.js";
import {HTTPException} from "hono/http-exception";

class ConfirmModelMo {
    async create(postId: number, userId: number,  role: Roles) {
        if (role !== Roles.PATIENT) {
            throw new HTTPException(403,{
                message: `This ${role} doesn't have permission to create`
            })
        }

        if (isNaN(postId) || isNaN(userId)) {
            throw new HTTPException(400, {
                message: "Invalid postId or userId",
            });
        }

        const existingConfirm = await prisma.confirm.findUnique({
            where: {
                userId_postId: {
                    userId: userId,
                    postId: postId,
                },
            },
        });

        if (existingConfirm) {
            throw new HTTPException(409, {
                message: "You have already booked this post.",
            });
        }
        
        return prisma.confirm.create({
            data: {
                confirm: true,
                user: { connect: { id: userId } },
                post: { connect: { id: postId } },
            },
        });
    }
    
    async getById(id: number) {
        return prisma.confirm.findMany({
            where: {
                userId: id,
            },
            include: {
                post: {
                    include: {
                        doctor: true
                    }
                }
            }
        })
    }
}

const ConfirmModel = new ConfirmModelMo()
export {ConfirmModel}