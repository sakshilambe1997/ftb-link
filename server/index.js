import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { getSlugRedirect, postLink } from "./controllers/link.js";


const app = express();
app.use(express.json());
app.use(cors());

// connect to mongoDB

const connectDB= async()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)

if(conn){
    console.log(`MongoDB connected successfully`)
}
};
connectDB();

app.get("/health",(req,res)=>{
    res.json({
        message:"All good"
})
});

app.post("/link",postLink);

app.get("/:slug",getSlugRedirect)


const PORT= process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})