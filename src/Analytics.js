import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function WithAnalytics(props){
	let location = useLocation();

	useEffect(() => {
		document.title = props.title;
		console.log('Dynamic route change: ', document.title);
		window._mtm.push({'event': 'mtm.PageView'});

	}, [location, props.title]);

	return props.children;
}