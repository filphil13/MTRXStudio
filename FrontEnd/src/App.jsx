
import './App.css'
import Title from './components/Title'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import Navbar from './components/Navbar'

function App() {
  return (
      <div className=" font-roboto">
          <Navbar />
          <Title />
          <Introduction />
          <Portfolio />
          <ContactUs />
      </div>
  )
}

export default App
