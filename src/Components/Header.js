import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from '../firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  const handleLoginAuth = () => {
    auth.signOut();
  }

	return (
		<div className="header">
			<Link to="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon-logo"
					className="header-logo"
				/>
			</Link>

			<div className="header-search">
				<input className="header-searchInput" type="text" />
				<SearchIcon className="header-searchIcon" />
			</div>

			<div className="header-nav">
        <Link to={!user && "/login"}>
					<div className="header-option" onClick={handleLoginAuth}>
            <span className="header-optionOne">{user ? `Hello, ${user.email}` : "Hello, Guest"}</span>
            <span className="header-optionTwo">{user ? "Sign Out" : "Sign In"}</span>
					</div>
				</Link>

				<div className="header-option">
					<span className="header-optionOne">Returns</span>
					<span className="header-optionTwo">& Orders</span>
				</div>

				<div className="header-option">
					<span className="header-optionOne">Your</span>
					<span className="header-optionTwo">Prime</span>
				</div>

				<Link to="/checkout">
					<div className="header-basketOption">
						<ShoppingBasketIcon />
						<span className="header-optionTwo header-basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
