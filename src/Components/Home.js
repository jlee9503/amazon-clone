import React, { Component } from 'react';
import './Home.css';
import Product from "./Product";

class Home extends Component {
  render() { 
    return (
			<div className="home">
				<div className="home-container">
					<img
						className="home-image"
						src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_B._CB406173267_.jpg"
						alt="home_image"
					/>
				</div>

				<div className="home-row">
          <Product
            id = "1"
						title="GTRACING Gaming Chair Racing Office Computer Game Chair Ergonomic Backrest and Seat Height Adjustment Recliner Swivel Rocker with Headrest and Lumbar Pillow E-Sports Chair Red"
						price={159.98}
						image="https://images-na.ssl-images-amazon.com/images/I/619sWFsXJ%2BL._AC_SY550_.jpg"
						rating={5}
					/>
          <Product
            id="2"
						title="Razer Huntsman Elite Gaming Keyboard: Fastest Keyboard Switches Ever - Clicky Optical Switches - Chroma RGB Lighting - Magnetic Plush Wrist Rest - Dedicated Media Keys & Dial - Classic Black"
						price={167.99}
						image="https://images-na.ssl-images-amazon.com/images/I/816YWjgTuJL._AC_SL1500_.jpg"
						rating={4}
					/>
				</div>

				<div className="home-row">
          <Product
            id="3"
						title="InnoGear Essential Oil Diffuser, Basic White"
						price={14.99}
						image="https://m.media-amazon.com/images/I/51IwYHykGqL._AC_AA180_.jpg"
						rating={5}
					/>
          <Product
            id="4"
						title="APOSEN Cordless Vacuum Cleaner, Powerful Suction Lightweight"
						price={72.24}
						image="https://m.media-amazon.com/images/I/51mCuHop-ZL._AC_AA180_.jpg"
						rating={3}
					/>
          <Product
            id="5"
						title="Clorox Disinfecting Wipes Value Pack, 75 Ct Each, Pack of 3 (Package May Vary)"
						price={17.99}
						image="https://m.media-amazon.com/images/I/81PCyDvvn0L._AC_AA180_.jpg"
						rating={5}
					/>
				</div>

				<div className="home-row">
          <Product
            id="6"
						title="LG 34WN650-W 34-Inch 21:9 UltraWide Full HD (2560 x 1080) IPS Display with VESA DisplayHDR 400 and AMD FreeSync, Silver"
						price={398.99}
						image="https://m.media-amazon.com/images/I/81GrL4IJNjL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
			</div>
		);
  }
}

export default Home;