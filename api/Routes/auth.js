import express from "express";
import { register, login, logout } from "../Controllers/auth.js";

const router = express.Router()

router.post("/register", register) //end point will be register
router.post("/login", login) //end point will be register
router.post("/logout", logout) //end point will be register

export default router