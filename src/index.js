import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import Contact from "./Contact";
import Home from "./Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/contact",
		element: <Contact />
	},
], {
	basename: '/matomo-demo'
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
