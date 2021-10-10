import React from 'react';
import {Route, Switch} from "react-router-dom";
import AdminLogin from "../admin/login/adminLogin";
import AdminCreateAccount from "../admin/signup/adminCreateAccount";

function AdminRoutes() {
    return (
        <Route path={["/admin", "/admin/create-account"]}>
            <Switch>
                <Route path="/admin" component={AdminLogin}/>
                <Route path="/admin/create-account" component={AdminCreateAccount}/>
            </Switch>
        </Route>
    )
}

export default AdminRoutes;