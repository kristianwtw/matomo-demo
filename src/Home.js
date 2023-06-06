import Layout from "./Layout";
import WithAnalytics from "./Analytics";

export default function Home(){
	return <WithAnalytics title="Home - Matomo Demo">
		<Layout title="Home - Matomo Demo">
			<h1>Welcome to Matomo Demo</h1>
		</Layout>
	</WithAnalytics>
}