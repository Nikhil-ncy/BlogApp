import express from "express"
import { addPost } from "../Controllers/post.js"

const router = express.Router()

// router.get("/test", (req, res) =>{
//     res.json("This is posts")
// })
// We don't want to give the content here so we are giving them in controllers folder

router.get("/test", addPost)

export default router