import React from 'react'
import { Outlet } from 'react-router-dom'
const Courses = () => {
  return (
    <div>
      <div className='sale'>
<p>Sale is LIVE!!!!!!!</p>
<p>Sale is LIVE!!!!!!!</p>
<p>Sale is LIVE!!!!!!!</p>
<p>Sale is LIVE!!!!!!!</p>
<p>Sale is LIVE!!!!!!!</p>
<p>Sale is LIVE!!!!!!!</p>
      </div>
      <h2>Courses</h2>
      <Outlet />

    </div>
  )
}

export default Courses
