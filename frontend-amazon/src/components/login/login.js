import React from 'react';
import "./login.css";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="form-container login-container-label">
            <form>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" autoComplete="off"/>
                </div>
                <Button style={{width: "100%", fontSize: "1.5rem", margin: "10px 5px 5px 0px", }} variant="contained" disableElevation>Login</Button>
                <Link to="/create-account">
                    <h4 style={{textAlign: "center", margin: "10px 0 0 0px", fontSize: "1.4rem"}}>Create Account</h4>
                </Link>
            </form>
        </div>
    )
}

export default Login;