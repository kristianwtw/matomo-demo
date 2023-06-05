import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import Contact from "./Contact";

const router = createBrowserRouter([
	{
		path: "*",
		element: <App />
	},
	{
		path: "/contact",
		element: <Contact />
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
