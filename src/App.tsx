import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "routes";
// import IdleTimerContainer from "components/IdleTimerContainer/idleTimerContainer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "App.css";

const App = () => {
	if (process.env.REACT_APP_STAGE === "Production") {
		console.log = function no_console() { };
	}
	// console.log(first)
	return (
		<BrowserRouter>
			<ToastContainer />
			<Router />
		</BrowserRouter>
	);
};

export default App;
