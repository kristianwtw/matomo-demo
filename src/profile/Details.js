import WithAnalytics from "../Analytics";
import Layout from "../Layout";

export default function Details(){
	return <WithAnalytics title="Profile Details - Matomo Demo">
		<Layout title="Profile Details - Matomo Demo">
			<h1>Profile Details</h1>
			<p>You get no details</p>
		</Layout>
	</WithAnalytics>
}