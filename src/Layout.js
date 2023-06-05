import React, {useEffect} from 'react';
import {NavLink, useLocation} from "react-router-dom";
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
	let location = useLocation();

	useEffect(() => {
		console.log('New page view');
		window._paq.push(['trackPageView']);
	}, [location]);

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