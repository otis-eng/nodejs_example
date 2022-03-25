import  {ExpressApp,ErrorHandler} from "./common";
import { UserRouter } from "./User";
import * as dotenv from "dotenv"


dotenv.config();

const SERVERPORT = process.env.PORT as string;
const VERSION = process.env.API_VERSION as string    
const MONGO_URI = process.env.MONGODB_URL as string


export const app = new ExpressApp();




app.useCORS("*","*").useJSON().useVersion(VERSION).useMongoDb(MONGO_URI)
new UserRouter(app).mount()
if(require.main === module){
    startServer().catch((error)=>{
        console.log(error);
        process.exit(1)
    })
}

async function startServer(){
    return app.listen(SERVERPORT);
}


app.use(ErrorHandler);













