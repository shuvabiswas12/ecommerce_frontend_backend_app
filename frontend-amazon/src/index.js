import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import HomeComponent from "./components/home";

function Main() {
    return (
        <React.StrictMode>
            <StateContext.Provider>
                <DispatchContext.Provider>
                    <HomeComponent/>
                </DispatchContext.Provider>
            </StateContext.Provider>
        </React.StrictMode>
    )
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);

