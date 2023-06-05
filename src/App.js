import logo from './logo.svg';
import './App.css';
import Layout from "./Layout";

function App() {
  return (
		<Layout title="Home">
			<img src={logo} className="App-logo" alt="logo" />
			<h1>Matomo Demo</h1>
		</Layout>
  );
}

export default App;
