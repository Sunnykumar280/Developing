
import React, { useState } from 'react'

import Washroom from './components/Washroom'


const App = () => {
  const [gender, setGender] = useState('Male')
  function changeGender() {
    if(gender == 'Male'){
      setGender('Female')
    } else if (gender =='Female'){
      setGender('LGBTQ')
    }
    else 
      setGender('Male')
  }
  return (
    <div className ='parent'>
      <h1>{gender}</h1>
      <button onClick ={changeGender}>Change gender</button>
      <Washroom user={gender} />
    </div>
  )
}

export default App