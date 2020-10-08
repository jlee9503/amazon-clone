import React from "react";
import "./Login.css";

function Login() {
	return (
		<div className="login">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
				alt="amazon-logo"
			/>

			<div className="login-container">
				<h1>Sign Up</h1>

				<form>
					<h5>Email</h5>
					<input type="text" />
					<input type="password" />
				</form>
			</div>
		</div>
	);
}

export default Login;
