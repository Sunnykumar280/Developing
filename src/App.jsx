import React, { useState } from 'react'
import User from './components/user'
import axios from 'axios'
const App = () => {

  const [ allData, setAllData] = useState([])
  // async function getData() {
const getData = async () =>{

    //if we need to call any API then i should use get 
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log("Data aa gya guys")
setAllData(response.data)
  }


  
  return (
    <div>
  <button onClick={getData}>Get data</button>
<div className='all-cards'>
{allData.map(function(elem,idx){
  // return <h1 key={idx}>hello </h1>

  //user.jsx banane ke baad niche wle ko hata diye 
  // return <h1 key={idx}>{elem.name}</h1>
  return (
  <div key= {idx}>
  <User elem={elem} />
   </div>
  )
})}
</div>

    </div>
  )
}

export default App
