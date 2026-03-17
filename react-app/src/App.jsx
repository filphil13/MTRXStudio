import "./App.css";
import Title from "./components/Title";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Background from "./components/Background";
import Footer from "./components/Footer";

function App() {
	//sometimes i touch my pp at night
	return (
		<div className=" bg-cyber-void">
			<Background id="backbg" />
			<Title />
			<Introduction />
			<Portfolio />
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
