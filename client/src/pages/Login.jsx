import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";

const Login = () =>{

    return (
        <div className="auth">
            <p>Login</p>
            <form>
                <input required type="text" placeholder="username" name="username"/>
                <input required type="password" placeholder="password" name="password"/>
                <button>Login</button>
                <span>Don't have an account?
                    <Link to='/register'> Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login