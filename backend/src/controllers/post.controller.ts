
import {AbstractController} from "../core/http/index.js";
import type {Context} from "hono";
import {PostModel} from "../models/index.js";

class PostCrud extends AbstractController{
    async create(c: Context) {
        const role = c.get('role');
        const body = await c.req.json()

        const post = await PostModel.create(role, body)
        return this.data(c, post,200, "Post created")
    }

    async findByQuery(c: Context) {
        const {sym, date} = c.req.query();
        const post = await PostModel.findByQuery(sym, date);

        return this.data(c, post,200, "Post found")
    }
}

const PostController = new PostCrud()
export {PostController}