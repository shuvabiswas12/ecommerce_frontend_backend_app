import React from "react"
import {BrowserRouter, Switch} from "react-router-dom";
import UserRoutes from "./routeLayouts/userRoutes";
import AdminRoutes from "./routeLayouts/adminRoutes";


function HomeComponent() {

    return (
        <>
            <BrowserRouter>

                <Switch>
                    <UserRoutes/>
                </Switch>
                <Switch>
                    <AdminRoutes/>
                </Switch>

            </BrowserRouter>
        </>
    )
}

export default HomeComponent