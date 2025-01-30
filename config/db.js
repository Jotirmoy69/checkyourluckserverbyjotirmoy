import mongoose from "mongoose";

export default function connectDB() {
    return mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.log(error);
            throw error; // Ensure the error propagates
        });
}
