import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return ( 
		<section className="banner-area relative">
			<div className="overlay overlay-bg"></div>
			<div className="container">
				<div className="row fullscreen justify-content-center align-items-center" style={{"height": "766px"}}>
					<div className="relative">
						<div className="banner-content text-center">
							<h1 className="text-uppercase text-white title">React App Test</h1>
              <Link to={'./register'}>
              <button className="primary-btn banner-btn text-white" linkTo>Get Started</button>
              </Link>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
 
export default Home;