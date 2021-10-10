import React from "react";
import "./filter.css";

function Filter() {
    return (
        <form className="filter">
            <div className="form-group">
                <label htmlFor="label" className="form-label">
                    Filter products
                </label>

                <div className="space"></div>

                <select className="filter-options">
                    <option value="1">Latest Products</option>
                    <option value="2">Price => High to Low &nbsp;</option>
                    <option value="3">Price => Low to High &nbsp;</option>
                </select>
            </div>
        </form>
    )
}

export default Filter