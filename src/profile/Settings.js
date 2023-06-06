import WithAnalytics from "../Analytics";
import Layout from "../Layout";

export default function Settings(){
	return <WithAnalytics title="Profile Settings - Matomo Demo">
		<Layout title="Profile Settings - Matomo Demo">
			<h1>Profile Settings</h1>
			<p>You get no settings</p>
		</Layout>
	</WithAnalytics>
}