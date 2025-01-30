import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    number: Number,
})

const userschema = mongoose.model('User', userSchema)

export default userschema