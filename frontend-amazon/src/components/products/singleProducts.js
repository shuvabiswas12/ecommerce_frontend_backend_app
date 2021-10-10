import React from "react";
import "./home.css";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function SingleProducts(props) {

    const product = props.product

    const moreinfoStyle = {
        fontSize: "1.5rem",
        margin: "10px 0"
    }

    const buttonStyle = {width: "100%", fontSize: "1.5rem", margin: "10px 5px 5px 0px", backgroundColor: "#004c8c"}

    return (
        <div className="product">
            <Link to="#">
                <img src={product.image} alt="..." className="img-responsive"/>
            </Link>
            <h4 className="product-name">{product.name}</h4>
            <Link to="/product/:id" style={moreinfoStyle}>MoreInfo >> </Link>

            <div className="price-and-brand">
                <p className="price">Price: {product.price}</p>
                <p className="brand-name">{product.brand}</p>
            </div>
            <div>
                <Button style={buttonStyle} variant="contained" disableElevation>Add To Cart</Button>
            </div>
        </div>
    )
}
