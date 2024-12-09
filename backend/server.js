import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config.js'
// import orderRouter from "./routes/orderRoute.js";


// app config
const app = express()
const PORT = 4000;

// middlewares
app.use(express.json())
app.use(cors())

// connecting database 

connectDB();

// api endpoints

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
// app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
