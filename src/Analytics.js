import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function WithAnalytics(props){
	let location = useLocation();

	useEffect(() => {
		console.log('Dynamic route change: ', props.title);
		document.title = props.title;
		//window._paq.push(['setDocumentTitle', props.title]);
		window._mtm.push({"event": "dynamic-page-load", "documentTitle": props.title});

	}, [location, props.title]);

	return props.children;
}