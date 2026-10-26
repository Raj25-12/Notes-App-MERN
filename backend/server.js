const dotenv=require('dotenv')
dotenv.config()

PORT=process.env.PORT

const cors=require('cors')

const express=require('express')
const app=express();

const connectDB = require('./config/dbConnection')
connectDB();

app.use(cors())

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const accountRoute=require('./routes/accountRoutes')
const contentRoute=require('./routes/contentRoutes')
const paintRoute=require('./routes/paintRoutes')

app.use("/api/v1",accountRoute)
app.use("/api/v2",contentRoute)
app.use("/api/v3",paintRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
