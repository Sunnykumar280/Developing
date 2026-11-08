import React from 'react'
import About from './pages/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RandomAbout from './pages/RandomAbout'
import { Route, Routes } from 'react-router-dom'
import AnyCourse from './pages/AnyCourse'
import Women from './pages/Women' 
import CourseDetail from './pages/CourseDetail'
// import { BrowserRouter }from 'react-router-dom'
const App = () => {
  return (
    <div>
{/* <div className='flex justify-between font-bold text-xl px-8 py-4 bg-pink-900 mb-10'>
  <h2>Navbar</h2>
  <div className="gap-8 flex">
<a href="/">Home</a>
<a href="/about">About page</a>
<a href="/product">Product page</a>
</div>
</div> */}
{/* //i will make this in anoother componenet  */}
<Navbar />
      <Routes>
      <Route path= '/' element={ <Home />}/>
      <Route path='/about' element={<About />}/>

<Route path='/about/:id' element={<RandomAbout />} />
<Route path='/about/women' element={<Women />} />

<Route path='/courses' element={<Courses />} />
<Route path='/courses/:courseId' element={<AnyCourse />} />
<Route path='/courses/:courseId/detail' element={<CourseDetail />} />


      </Routes>
    </div>
  )
}

export default App
