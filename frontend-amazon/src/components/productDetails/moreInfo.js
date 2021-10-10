import React from "react";
import {useParams} from "react-router-dom";
import "./more-info.css"
import {Button} from "@mui/material";

export default  function MoreInfo() {
    const buttonStyle = {width: "50%", fontSize: "1.5rem", margin: "2rem 0 0 0 ", backgroundColor: "#004c8c"}
    const productDetailsStyle = {
        color: "brown", fontSize: "1.5rem"
    }

    const _id = useParams().id

    return (
        <div className="product-info">
            <img src="/images/p6.jpg" alt="..." className="img-responsive"/>
            <div className="product-data">
                <h4 className="product-name">Product Name</h4>
                <p className="product-price">Price: <br/> <span style={productDetailsStyle}>$40</span></p>
                <p className="product-seller">Product Seller: <br/><span style={productDetailsStyle}>Nikon</span></p>
                <p className="product-description">Product Description: <br/> <span style={productDetailsStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque distinctio ea facilis minima modi non officia porro suscipit ut.</span></p>

                <div className="button-center">
                    <Button style={buttonStyle} variant="contained" disableElevation>Add To Cart</Button>
                </div>

            </div>

        </div>
    )
}