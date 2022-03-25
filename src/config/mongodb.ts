import mongoose from "mongoose";


export   const mongodb =  async(url:string) =>{
    const mongoseURL = process.env.MONGOSE_URL as string;
    await mongoose.connect(url).
    then(() =>{
        console.log("Connect databse");
    }).catch((error:any) =>{
        console.log("Error connecting to Mongoose with error: " + (error as Error).message);
    })
}