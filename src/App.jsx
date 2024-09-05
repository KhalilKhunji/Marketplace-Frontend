import './App.css'

// Importing Homepage component
import Homepage from './components/Homepage/Homepage.jsx'

// Importing semantic components
import Navbar from './components/SemanticComponents/Navbar/Navbar.jsx'
import Footer from './components/SemanticComponents/Footer/Footer.jsx'

// Importing error components
import PageNotFound from './components/ErrorComponents/PageNotFound/PageNotFound.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <h1>App</h1>
      <Homepage/>
      <Footer/>
      <PageNotFound/>
    </>
  )
}

export default App
