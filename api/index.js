import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
     console.log('Connected to MY MongoDB')
})
.catch((error)=>{
    console.log('error caughted')
    console.log(error)
})

const app = express();

app.listen (3000,()=>{

    console.log('==> server Listening on port 3000 <==')

})