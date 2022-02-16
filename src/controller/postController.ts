import  {PostInstance}  from './../db/post';
import {Request, Response} from "express";
import { v4 as uuidv4 } from "uuid";

 class  PostController{

    public static  async createPost(req:Request, res:Response){
        let post =  {
            id:req.body.id as number,
            title:req.body.title as string,
            content:req.body.content as string,
        }
        console.log(post);
        try{
           await PostInstance.create(post);
            return res.status(200).send({message:"sucess!"});
        }catch(err){
            return res.status(400).send({message:"Error: "+ err});
        }
       
    }
    async readAllPost(req:Request, res:Response){
        try{    
            let post = await PostInstance.findAll();
            return res.status(200).send({message:"success",data:post});
        }catch(err){
            return res.status(400).send({message:"Error: "+err});
        }     
    }

}


export default PostController;