import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import Home from "./Home";
import Details from "./profile/Details";
import Settings from "./profile/Settings";

export const RenderContext = createContext(null);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/profile/details",
		element: <Details />
	},
	{
		path: "/profile/settings",
		element: <Settings />
	}
], {
	basename: '/matomo-demo'
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
