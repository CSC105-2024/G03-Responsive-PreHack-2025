import {z} from "zod";
import { Roles } from "../../generated/prisma/index.js";

type User = {
    id: number,
    username: string,
    surname: string,
    department: string,
    email: string,
    password: string,
    role: Roles,
}

type Post = {
    id: number,
    start_time: string,
    end_time: string,
    post_date: Date,
}

type SuccessResponse<T = void> = {
    success: true;
    message: string;
} & (T extends void ? {} : { data: T });

type ErrorResponse = {
    success: false;
    error: string;
    isFormError?: boolean;
};

const CreateSchema = z.object({
    username: z.string().min(3),
    surname: z.string().min(3),
    email: z.string().email("Invalid email format"),
    password: z
        .string()
        .trim()
        .refine(
            (value) =>
                /^(?=(?:.*[A-Z]){1,})(?=(?:.*[!@#$&*]){1,})(?=(?:.*[0-9]){2,})(?=(?:.*[a-z]){2,}).*$/.test(
                    value,
                ),
            {
                message:
                    "Password must include at least 1 uppercase letter, 2 lowercase letters, 2 digits, and 1 special character",
            },
        ),
});

export { Roles } from "../../generated/prisma/index.js";
export type {User, Post, ErrorResponse, SuccessResponse}
export {CreateSchema}