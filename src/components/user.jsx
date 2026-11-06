import React from 'react'

const user = (props) => {
const clr = Math.floor(Math.random()*256)
const clr2 = Math.floor(Math.random()*256)

const clr3= Math.floor(Math.random()*256)
  return (
    <div style={{backgroundColor:`rgb(${clr},${clr2}, ${clr3})`}} className='user-card'>
      
    </div>
  )
}

export default user
