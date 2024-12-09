import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashishyadav:<dbpassword>@cluster0.ff0mj.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log("DB connected"))
}