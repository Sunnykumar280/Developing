import React from 'react'

const Lower = (props) => {
  return (
    
        <div className='lower'>
        <h1>{props.cardData.username}</h1>
        <h4>{props.cardData.degree}</h4>
        <h3>{props.cardData.gmail}</h3>
<p>Lorem ipsum dolor sit amet.</p>


      </div>
    
  )
}

export default Lower
