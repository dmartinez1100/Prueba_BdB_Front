import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogInPage from "./login";
import HomePage from "./home";

/* Imports para el test nada mas, solo iconos -------------------------------------------------------------------------*/

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
			<Route path='/main'>
					<HomePage />
				</Route>
				<Route exact path='/'>
					<LogInPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;