import "./App.css";
import Title from "./components/Title";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Background from "./components/Background";
import CursorTrail from "./components/CursorTrail";

function App() {
	//sometimes i touch my pp at night
	return (
		<>
			<CursorTrail />
			<Background id="backbg" />
			<Title />
			<Introduction />
			<Portfolio />
			<ContactUs />
		</>
	);
}

export default App;
