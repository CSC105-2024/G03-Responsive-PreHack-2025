import {AbstractController} from "../core/http/index.js";
import { type Context } from "hono";
import { ConfirmModel } from "../models/index.js";

class ConfirmCrud extends AbstractController{
    async create(c: Context) {
        const userId = c.get("userId")
        const role = c.get('role');
        const { postId } = await c.req.json();
        
        await ConfirmModel.create(parseInt(postId), parseInt(userId), role)

        return this.json(c, 200, "Confirmed")
    }
    
    async getById(c: Context) {
        const userId = c.get("userId")
        const confirm = await ConfirmModel.getById(userId)

        return this.data(c, confirm,200,"Confirmed Found")
    }
}

const ConfirmController = new ConfirmCrud()
export {ConfirmController}