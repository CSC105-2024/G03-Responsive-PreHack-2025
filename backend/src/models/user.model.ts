import {prisma} from "../index.js";
import {type User, Roles} from "../types/index.js";
import {HTTPException} from "hono/http-exception";

class UserModelLo {
    async create(data: User) {
        const duplicate = await prisma.users.findFirst({
            where: {email: data.email},
            select: {email: true},
        })

        if (duplicate) {
            throw new HTTPException(400, {
                message: "Email already exists",
                cause: {form: true},
            })
        }

        if (data.role !== Roles.DOCTOR && data.role !== Roles.PATIENT) {
            throw new HTTPException(400, {
                message: "Invalid role",
                cause: {form: true},
            })
        }

        return prisma.users.create({
            data: {
                username: data.username,
                surname: data.surname,
                department: data.department,
                email: data.email,
                password: data.password,
                role: data.role as Roles,
            }
        });
    }

    async findById(id: number) {
        const user = await prisma.users.findUnique({
            where: {
                id: id
            },
        })

        if (!user) {
            throw new HTTPException(404, {
                message: "User not found",
            })
        }
        return user;
    }

    async findByRole(role: Roles) {
        return prisma.users.findMany({
            where: {
                role: role
            },
        });
    }
}

const UserModel = new UserModelLo();
export {UserModel}