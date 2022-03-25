import express from "express"
import cors  from "cors";
import {mongodb} from "../config";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
export class ExpressApp{

    protected app: express.Application;
    protected router: express.Router;

    constructor(){
        this.app = express()
        this.router = express.Router()
    }
      useJSON() {
          this.app.use(
            express.urlencoded({ extended: false, limit: '2mb' }),
            express.json({ limit: '5mb' })
          )
          return this
        }
      async useMongoDb(url:string){
        await  mongoose.connect(url).then(()=>{
          console.log("Connect to DB!")
        }).catch((error) =>{
          console.log((error as Error).message)
        })
          
      }
      useCORS(origin: string , method: string) {
        const corsOptions = {
          origin: origin,
          methods: method,
          allowedHeaders: '*',
          exposedHeaders: [
            'ETag',
            'Cache-Control',
            'Content-Language',
            'Content-Type',
            'Expires',
            'Last-Modified',
            'Pragma',
          ],
        }
        this.app.use(cors(corsOptions))
        return this
      }
      useEnviroment(){
        dotenv.config();
        return this
      }
      useVersion(version: string) {
        this.app.use(`/${version}`, this.router)  
        return this
      }

      listen(port: string | number) {
        return new Promise((resolve) =>
          this.app.listen(port, () => {
            console.log('Server running on port', port)
            resolve(undefined)
          })
        )
      }
      
      use(...handlers:express.RequestHandler[] | express.ErrorRequestHandler[]){
        this.app.use(...handlers)
        return this

      }
      getApp() {
        return this.app
      }
    
      getRouter() {
        return this.router
      }
    
}