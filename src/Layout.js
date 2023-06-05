import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(){
	return <nav>
		<ul>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/contact">Contact</NavLink></li>
		</ul>
	</nav>
}

const Layout =({children}) =>{
	return (
		<div className="App">
			<header className="App-header">
				<Navigation />
				{children}
			</header>
		</div>
	);
}

export default Layout;