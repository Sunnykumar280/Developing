import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    // <div>
    //   <h1>This is Navbar and it is the Components ka beta </h1>
    // </div>


    <div className='nav'>


<NavLink to='/' style={({isActive}) => ({
    color: isActive? 'red' : 'blue'
})} >
Home
</NavLink>
<NavLink to='/about' style={({isActive}) => ({
    color: isActive? 'red' : 'blue'
})} >
About
</NavLink>
    
<NavLink to= '/courses' style={({isActive})=>({
color: isActive? 'red' : 'blue'
})}>
  Courses
</NavLink>



    </div>


  )
} 


export default Navbar
