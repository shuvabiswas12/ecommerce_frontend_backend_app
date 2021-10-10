import React, {Component} from 'react';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import {Route, Switch} from "react-router-dom";
import AllProducts from "../products/allProducts";
import Login from "../login/login";
import CreateAccount from "../signup/createAccount";
import MoreInfo from "../productDetails/moreInfo";

function UserRoutes() {
    return (

        <Route path={["/", "/login", "/create-account"]}>
            <Navbar/>

            <Switch>
                <Route exact path="/" component={AllProducts}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/create-account" component={CreateAccount}/>
                <Route exact path="/product/:id" component={MoreInfo}/>
            </Switch>

            <Footer/>
        </Route>
        
    )
}

export default UserRoutes;