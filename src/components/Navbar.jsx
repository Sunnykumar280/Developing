import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between font-bold text-xl px-8 py-4 bg-pink-900 mb-10'>
  <h2>Navbar</h2>

<input className='border-2' type="text" />


  <div className="gap-8 flex">
{/* <a href="/">Home</a>
<a href="/about">About page</a>
<a href="/product">Product page</a> */}
<Link to='/product'>Product page</Link>
<Link to='/about'>About</Link>

<Link to='/'>Home</Link>
</div>
</div>
  )
}

export default Navbar
