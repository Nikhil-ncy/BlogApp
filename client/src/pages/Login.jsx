import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

const Login = () =>{

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })
    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const {login} = useContext(AuthContext);

    console.log(currentUser);

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault() // if not done then on clicking it the page automatically gets refresh
        try{
            await login(inputs)
            navigate("/")

        }catch(err){
            setError(err.response.data)
            console.log(err)
        }
    }

    return (
        <div className="auth">
            <p>Login</p>
            <form>
                <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
                <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't have an account?
                    <Link to='/register'> Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login