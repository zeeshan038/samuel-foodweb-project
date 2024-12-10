//NMP packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//Paths
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import MenuPricing from './Pages/MenuPricing'
import OpeningHours from './Pages/OpeningHours'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<MenuPricing />} />
          <Route path='/opening' element ={<OpeningHours/>}/>
          <Route path='/about' element ={<AboutUs/>}/>
          <Route path='/contact' element ={<Contact/>}/>

        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App
