import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function WithAnalytics(props){
	let location = useLocation();

	useEffect(() => {
		document.title = props.title;

		// Push an event to Matomo, triggering a page view
		window._mtm.push({"event": "dynamic-page-view", "documentTitle": props.title});

	}, [location, props.title]);

	return props.children;
}