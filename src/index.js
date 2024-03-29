// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";



dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORt||8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!",err);
})












































// import express from "express"
// const app=express() 

// (async()=>{
//     try {
//         mongooose.connect(`${process.env.MONGODB_URI}/${DB_name}`)

//         app.on("error",(error)=>{
//             console.log("error:", error);
//             throw error;
//         })

//         app.listen (process.env.PORT,()=>{
//             console.log(`APP is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error :",error)
//         throw err
//     }
// }) ()