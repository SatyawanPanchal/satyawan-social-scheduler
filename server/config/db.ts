import mongoose, { mongo } from "mongoose";
const connectDB=async ()=>{
    try {
        mongoose.connection.on("connected",()=>{
            console.log('mongodb atlas connected');
            
        })
        await mongoose.connect(process.env.MONGODB_URI!)
    } catch (error:any) {
        console.error(error)
        process.exit(1)
        
    }
}

export default connectDB;