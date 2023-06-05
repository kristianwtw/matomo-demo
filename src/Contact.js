import {useState} from "react";
import Layout from "./Layout";

function ContactForm(){
	const [isSubmitted, setIsSubmitted] = useState(false);

	function onSubmit(e){
		e.preventDefault();

		setIsSubmitted(true);
	}

	if(isSubmitted){
		return <p>Thank you for contacting us!</p>
	}
	else{
		return <form id="contact-form" action="#" onSubmit={onSubmit}>
			<label>Your name</label><br />
			<input type="text" /><br />
			<br />
			<button type="submit">Submit</button>
		</form>
	}
}

export default function Contact(){
	return <Layout title="Contact">
		<h1>Contact Us</h1>
		<ContactForm />
	</Layout>
}