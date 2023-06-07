import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function WithAnalytics(props){
	let location = useLocation();

	useEffect(() => {
		document.title = props.title;
		console.log('Dynamic page change: ', props.title);
		window._mtm.push({"event": "dynamic-page-load"});

	}, [location, props.title]);

	return props.children;
}