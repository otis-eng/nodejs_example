import express from "express";
const routers = express.Router();
import postController from "../controller/postController";


// useing with static
routers.post("/createPost",postController.createPost);

// useing with not static
routers.get("/",(new postController).readAllPost);


export default routers;