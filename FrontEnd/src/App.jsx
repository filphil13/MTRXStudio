
import './App.css'
import Title from './components/Title'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import Navbar from './components/Navbar'
import { useRef } from 'react';

function App() {

    const TitleRef = useRef(null);
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
            <div className=" font-roboto justify-end">
                
                
                <div ref={TitleRef}>
                    <Title />
                </div>
                <div className="w-full flex justify-end px-6">
                  <button type="button" onClick={() => scrollToSection(IntroRef)} className='bg-transparent border-none my-6'>
                    <svg className='w-16 h-16' dataSlot="icon" fill="none" strokeWidth={1.0} stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
                    </svg>
                  </button>
                </div>

                <div ref={IntroRef}>
                  <Introduction />
                  <div className="bg-[#283845] w-full flex justify-end px-6">
                  <button type="button" onClick={() => scrollToSection(PortfolioRef)} className='bg-transparent border-none my-6'>
                    <svg className='w-16 h-16' dataSlot="icon" fill="none" strokeWidth={1.0} stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
                    </svg>
                  </button>
                </div>
                </div>
                
                <div ref={PortfolioRef}>
                  <Portfolio />
                  <div className="w-full flex justify-end px-6">
                  <button type="button" onClick={() => scrollToSection(ContactRef)} className='bg-transparent border-none my-6'>
                    <svg className='w-16 h-16' dataSlot="icon" fill="#FFFFFF" strokeWidth={1.0} stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
                    </svg>
                  </button>
                </div>
                </div>
                
                <div ref={ContactRef}>
                  <ContactUs />
                  <div className="bg-[#283845] w-full flex justify-end px-6">
                  <button type="button" onClick={() => scrollToSection(TitleRef)} className='bg-transparent border-none my-6'>
                    <svg className='w-16 h-16' dataSlot="icon" fill="#FFFFFF" strokeWidth={1.0} stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5" />
                    </svg>
                  </button>
                </div>
                </div>

            </div>
    )
}

export default App
