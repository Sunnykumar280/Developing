import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Kodex from './Pages/kodex' 
import Kodr from './Pages/kodr'
import Courses from './Pages/Courses'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />

  <Route path='/courses' element={<Courses />}>
   {/* <Route path='footer' element={<Footer />}/>  */}
    <Route path='Kodex' element={<Kodex />} />
    <Route path='Kodr' element={<Kodr />} />
  </Route>
</Routes>

<Footer />

    </div>
  )
}

export default App
