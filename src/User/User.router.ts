import { Router} from "../common";
import  * as server from "../common/serverHandlers";
import {Request,Response} from "express";

export class UserRouter extends Router{

    mount(){
        this.router.get("/user",(req:Request, res:Response) =>{
          
            res.json( server.sendOk({data:"This is user rotuer",ok:true}));
        })
    }

}