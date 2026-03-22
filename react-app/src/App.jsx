import "./App.css";
import Title from "./components/Title";
import Team from "./components/Team";
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
			<Team />
			{/* 
                <Portfolio />
            */}
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
