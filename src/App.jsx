import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Bendi from './components/Bendi'
import About from './components/About'
import Reviews from './components/Reviews'
import Prices from './components/Prices'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Nav />
      <Home id="home" />
      <Bendi id="bendi" />
      <About id="about" />
      <Reviews id="reviews" />
      <Prices id="prices" />
      <Contact id="contact" />
    </>
  )
}

export default App
