import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI)
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;