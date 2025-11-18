import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Bendi from './components/Bendi'
import About from './components/About'


function App() {
  return (
    <>
      <Nav />
      <Home id="home" />
      <Bendi id="bendi" />
      <About id="about" />
      <Home id="reviews" />
      <Home id="prices" />
    </>
  )
}

export default App
