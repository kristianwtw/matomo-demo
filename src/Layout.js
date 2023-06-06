import React, {useEffect} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

function Navigation(){
	return <nav>
		<ul>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/contact">Contact</NavLink></li>
			<li>
				<NavLink to="/profile/details">Profile</NavLink>
				<ul>
					<li><NavLink to="/profile/details">Details</NavLink></li>
					<li><NavLink to="/profile/settings">Settings</NavLink></li>
				</ul>
			</li>
		</ul>
	</nav>
}

function Layout(props){
	return (
		<div className="App">
			<Helmet>
				<title>{props.title}</title>
			</Helmet>
			<Navigation />
			<header className="App-header">
				{props.children}
			</header>
		</div>
	);
}

export default Layout;