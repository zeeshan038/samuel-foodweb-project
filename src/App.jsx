//NMP packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//Paths
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Footer from './components/Footer'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/footer' element={<Footer />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
