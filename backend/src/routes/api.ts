import {Hono} from "hono";
import {
    UserController,
    AuthController,
    PostController,
    ConfirmController
} from "../controllers/index.js";
import {
    validateMiddleware,
    authMiddleware,
} from "../middlewares/index.js";

const api = new Hono()
    .basePath('/api/v1');

//users
api.get('/users', authMiddleware, (c) => UserController.readByRole(c))
api.get('/users/:id', (c) =>  UserController.readById(c))
api.post('/users', (c) => UserController.create(c))

//auth
api.post('/login', (c) => AuthController.login(c))
api.post('/logout', authMiddleware, (c) => AuthController.logout(c))
api.post('/refresh', authMiddleware, (c) => AuthController.refresh(c))

//post
api.get('/posts', (c) => PostController.findByQuery(c))
api.get('/posts/all', (c) => PostController.findMany(c))
api.post('/posts', authMiddleware, (c) => PostController.create(c))
api.get('/posts/doctor', authMiddleware, (c) => PostController.findByDoctorId(c))
api.delete('/posts', (c) => PostController.deleteById(c))

//confirm
api.get('/confirms', authMiddleware, (c) => ConfirmController.getById(c))
api.post('/confirms', authMiddleware, (c) => ConfirmController.create(c))

export { api }
