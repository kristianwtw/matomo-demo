import React, {useEffect} from 'react';
import {NavLink, useLocation} from "react-router-dom";

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
			<Navigation />
			<header className="App-header">
				{props.children}
			</header>
		</div>
	);
}

export default Layout;