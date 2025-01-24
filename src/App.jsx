import './App.css'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
// import Services from './components/Services'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
      <Navbar />
      <Homepage />
      <About/>
      {/* <Services/> */}
      <Projects/>
      {/* <Contacts/> */}
      <Footer/>
    </>
  )
}

export default App;
