
import './App.css'
import Title from './components/Title'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import Navbar from './components/Navbar'
import { useRef } from 'react';

function App() {

    const IntroRef = useRef(null);
    const PortfolioRef = useRef(null);
    const ContactRef = useRef(null);

    const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

    return (
            <div className=" font-roboto">
                <Navbar />
                <Title />
                <svg className='w-16 h-16 ' dataSlot="icon" fill="#FFFFFF" strokeWidth={1.0} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <Introduction ref={IntroRef} />
                
                <Portfolio ref={PortfolioRef} />
                <ContactUs ref={ContactRef} />
            </div>
    )
}

export default App
