import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
  const [{ basket }, dispatch] = useStateValue();
  
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
				<div className="header-option">
					<span className="header-optionOne">Hello Guest</span>
					<span className="header-optionTwo">Sign In</span>
				</div>

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
            <span className="header-optionTwo header-basketCount">{basket.length}</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header
