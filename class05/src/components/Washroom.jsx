import React from 'react'

const Washroom = (props) => {
  const color =
  props.user == 'Male'
    ? 'blue'
    : 'green';
      //  because ye sirf 2 ke liye use h0ga what about the other so we casuaaly use index css to put color in that 

  return (
    <div  className = {props.user}>
    {props.user} WashRoom
    </div>
  )
}

export default Washroom
