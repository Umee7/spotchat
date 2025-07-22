import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       const conn =  await mongoose.connect(process.env.MONGODB_URI);
       console.log(`Connected to mongoDB ${conn.connection.host}`)
    } catch(error) {
        console.log("Failed to connect mongoDB")
        process.exit(1); // 1 is for failure , 0 is for success
    }
}