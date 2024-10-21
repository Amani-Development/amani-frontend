import React from "react";
import {HashRouter} from "react-router-dom";
import Router from "routes";
// import IdleTimerContainer from "components/IdleTimerContainer/idleTimerContainer";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "App.css";

if (process.env.REACT_APP_STAGE === "Production") {
    console.log = function no_console() {
    };
} else {
    console.log("Environment:", process.env.REACT_APP_STAGE);
}
const App = () => {

    // console.log(first)
    return (
        <HashRouter>
            <ToastContainer/>
            <Router/>
        </HashRouter>
    );
};

export default App;
