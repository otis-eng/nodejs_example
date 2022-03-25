import {Request,Response,RequestHandler, response} from "express";


export declare function userRollbasr(assecToken: string):void;
export declare function handleRequesat<T=Request,U= Response>(callback:(req:T,res:U) => any):RequestHandler;
interface ISendOk{
        ok:boolean;
        data:any;
}
export  function sendOk(data:ISendOk){

       return data;
}
interface IsendError{
        ok:boolean;
        data:any;
        error:any;
       
    
}
export  function sendError(dataType:IsendError) {
        return dataType
       
}
