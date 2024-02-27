import express from "express"
import postRoutes from "./Routes/posts.js"
import authRoutes from "./Routes/auth.js"
import userRoutes from "./Routes/users.js"
import cors from "cors"
import { db } from "./db.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

// app.use("/test", (req, res) =>{
//     res.json("This is test")
// })
// We don't want to give routes here so we are giving them in routes folder

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(8800, ()=>{
    console.log("Connected")
})

app.get("/", (req, res) =>{
    res.json("Backend is running well")
})

app.get("/getMysqlStatus", (req, res) => { 
      
    db.ping((err) => { 
        if(err) return res.status(500).send("MySQL Server is Down"); 
          
        return res.send("MySQL Server is Active"); 
    }) 
});