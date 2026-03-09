import "./App.css";
import Title from "./components/Title";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import Background from "./components/Background";

function App() {
  const TitleRef = useRef(null);
  const IntroRef = useRef(null);
  const PortfolioRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Background id="backbg" />
          <Title />
          <Introduction />
          <Portfolio />
          <ContactUs />
          
    </>
  );
}

export default App;
