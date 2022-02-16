import express,{Response,Request} from "express";
import postRouter from "./router/postRouter";
import body_parser from "body-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/post",postRouter);

app.listen(8088,() =>{
    console.log("App listten port: "+8088);
});




