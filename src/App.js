import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";

function App() {
	const [{}, dispatch] = useStateValue();

	// tracking logged in user
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log(authUser);

			// when user is logged in
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// when user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					{/* Go to login page */}
					<Route path="/login">
						<Login />
					</Route>
					{/* Go to checkout page */}
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					{/* Go to payment page */}
					<Route path="/payment">
						<Header />
						<Payment />
					</Route>

					{/* Main page */}
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
