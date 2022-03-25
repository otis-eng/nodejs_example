import { HTTPError } from ".";
import * as server from "./serverHandlers";
import express from "express";


export function ErrorHandler(
    error:Error,
    _:express.Request, 
    res:express.Response,
    next:express.NextFunction

){
    if(res.headersSent){
        return next(error);
    }
    const data = (error as HTTPError).data ?? {};
    const message = error.message;
    return res.json(server.sendError({ok:true,data:data,error:"not ok"}));
}