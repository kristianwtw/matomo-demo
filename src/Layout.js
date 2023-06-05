import React from 'react';
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";

function Navigation(){
	return <nav>
		<ul>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/contact">Contact</NavLink></li>
		</ul>
	</nav>
}

const Layout = (props) =>{
	return (
		<div className="App">
			<Helmet>
				<title>{props.title} - Matomo Demo</title>
			</Helmet>
			<header className="App-header">
				<Navigation />
				{props.children}
			</header>
		</div>
	);
}

export default Layout;