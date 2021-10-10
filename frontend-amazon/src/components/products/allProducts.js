import React from "react";
import "./home.css";
import Filter from "../filtering/filter";
import SingleProducts from "./singleProducts";
import data from "../../data";

function AllProducts() {

    const products = data.products

    return (
        <>
            <Filter/>
            <div className="products">
                {
                    products.map((product) => <SingleProducts product={product}/>)
                }
            </div>
        </>
    )
}

export default AllProducts

