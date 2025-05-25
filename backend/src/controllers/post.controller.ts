
import {AbstractController} from "../core/http/index.js";
import type {Context} from "hono";
import {PostModel} from "../models/index.js";
import {HTTPException} from "hono/http-exception";

class PostCrud extends AbstractController{
    async create(c: Context) {
        const role = c.get('role'); 
        const id = c.get('userId');
        const body = await c.req.json()

        const post = await PostModel.create(role, body, id)
        return this.data(c, post,200, "Post created")
    }

    async findByQuery(c: Context) {
        const {sym, date} = c.req.query();
        const post = await PostModel.findByQuery(sym, date);

        return this.data(c, post,200, "Post found")
    }
    
    async findMany(c: Context) {
        const post = await PostModel.findMany();
        return this.data(c, post,200, "Post found")
    }
    
    async findByDoctorId(c: Context) {
        const id = c.get('userId');
        const post = await PostModel.findByDoctorId(id);
        
        return this.data(c, post,200, "Post found")
    }
    
    async deleteById(c: Context) {
        const {id} = c.req.query()
        
        await PostModel.deleteById(parseInt(id))
        return this.json(c, 200, 'Post removed')
    }
}

const PostController = new PostCrud()
export {PostController}