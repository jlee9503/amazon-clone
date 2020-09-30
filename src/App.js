import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
	render() {
    return (
			<Router>
				<div className="app">
					<Header />
					<Switch>
						{/* Go to checkout page */}
						<Route path="/checkout">
							<Checkout />
						</Route>

						{/* Main page */}
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
