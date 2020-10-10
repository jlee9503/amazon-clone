import { auth } from "../firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	// function for sign-in event
	const signIn = (event) => {
		event.preventDefault(); // prevent refreshing site

		// check if sign-in is valid
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	// function for register event
	const register = (event) => {
		event.preventDefault(); // prevent refreshing site

		// creating a new account in the firebase database
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			// throw an error message
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="amazon-logo"
					className="login-logo"
				/>
			</Link>

			<div className="login-container">
				<h1>Sign-In</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>

					<button type="submit" onClick={signIn}>
						Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to the Amazon Clone Project conditions of use
					& sale. Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>

				<button className="sign-up-button" onClick={register}>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
