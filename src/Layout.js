import React, {useEffect} from 'react';
import {NavLink, useLocation} from "react-router-dom";

function DynamicAnalytics(props){
	let location = useLocation();

	useEffect(() => {
		document.title = props.title;
		console.log('Dynamic route change: ', props.title);
		window._paq.push(['setDocumentTitle', props.title]);
		window._paq.push(['trackPageView']);

	}, [location, props.title]);
}

function Navigation(){
	return <nav>
		<ul>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/contact">Contact</NavLink></li>
		</ul>
	</nav>
}

function Layout(props){
	return (
		<div className="App">
			<DynamicAnalytics title={props.title}/>
			<Navigation />
			<header className="App-header">
				{props.children}
			</header>
		</div>
	);
}

export default Layout;