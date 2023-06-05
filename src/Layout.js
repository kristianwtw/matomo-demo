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
	let pageTitle = `${props.title} - Matomo Demo`;

	useEffect(() => {
		console.log('New page view with title');
		window._paq.push(['setDocumentTitle', pageTitle]);
	}, [location, pageTitle]);

	return (
		<div className="App">
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<header className="App-header">
				<Navigation />
				{props.children}
			</header>
		</div>
	);
}

export default Layout;