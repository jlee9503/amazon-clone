import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
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
					<input type="text" />

					<h5>Password</h5>
					<input type="password" />

					<button>Sign In</button>
				</form>

				<p>
					By signing-in you agree to the Amazon Clone Project conditions of use
					& sale. Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>

				<button className="sign-up-button">Create your Amazon Account</button>
			</div>
		</div>
	);
}

export default Login;
