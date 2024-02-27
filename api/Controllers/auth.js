import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


export const register = (req, res) =>{
    
    //CHECK EXISTING USERS
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    
    db.query(q, [req.body.email, req.body.name], (err, data) =>{ // pass all the values that you want to give to "?"
        if(err) return res.json(err);
        if(data.length > 0) return res.status(409).json("User already exists");

        // import bcryptjs to store the passwords in codes
        // Hash the password and create a user

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // now is the time to store the user to our database

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"

        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data)=>{
            if(err) return res.json(err);
            return req.status(200).json("User has been created")
        })
    });

};
export const login = (req, res) =>{

    //USER EXISTS OR NOT
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.json(err);

        if(data.length == 0) return res.status(404).json("User not found");

        //CHECK THE PASSWORD

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password");

        const token = jwt.sign({id:data[0].id}, "jwtkey");
        const {password, ...other} = data;

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)

    });

}
export const logout = (req, res) =>{

}