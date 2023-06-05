import logo from './logo.svg';
import './App.css';
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<h1>Matomo Demo</h1>

				<h2>Contact us</h2>
				<ContactForm />
      </header>
    </div>
  );
}

export default App;
