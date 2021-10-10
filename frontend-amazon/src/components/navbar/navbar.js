import React, {useState} from "react"
import "./navbar.css";
import "./nav-menu.css";
import {MenuItem} from "@mui/material";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import {Link} from "react-router-dom"

function Navbar() {

    const [isOpen, setOpen] = useState(false)

    const myStyle = {fontSize: "2.0rem", borderBottom: "1px solid grey"}

    function dropdownToggle() {
        isOpen ? setOpen(false) : setOpen(true)
    }

    return (
        <>
            <nav className="nav">
                <a href="/" style={{textDecoration: "none"}}>
                    <h4 className="logo">MyE-Commerce</h4>
                </a>
                <div>
                    <button className="menu-btn" onClick={() => {
                        dropdownToggle()
                    }}>
                        <FormatAlignJustifyIcon style={{fontSize: "3.0rem"}}/>
                    </button>


                    <div className={isOpen ? "settings-menu settings-menu-height" : "settings-menu"}>

                        <MenuItem component={Link} to="/login"
                                  style={myStyle}
                                  onClick={dropdownToggle}>Login</MenuItem>

                        <MenuItem style={myStyle}
                                  onClick={dropdownToggle}>Logout</MenuItem>

                        <MenuItem style={myStyle}
                                  onClick={dropdownToggle}>Cart</MenuItem>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar