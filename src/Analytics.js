import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function WithAnalytics(props){
	let location = useLocation();

	useEffect(() => {
		document.title = props.title;
		console.log('Dynamic route change: ', props.title);
		window._paq.push(['setDocumentTitle', props.title]);
		window._paq.push(['trackPageView']);

	}, [location, props.title]);

	return props.children;
}