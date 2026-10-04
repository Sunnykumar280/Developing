import React from 'react'
import { useState } from 'react'

const App = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [allUsers, setAllUsers] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    // isme hi olduser m object pass kar diya name and email wrn alag alag bhi bana skte ho 
    // const oldUsers = [...allUsers, {name, email}]
    // const oldUsers = [...allUsers]
    // oldUsers.push({name, email})
    // console.log(oldUsers);
    // setAllUsers(oldUsers)
// isme agar pass kar skte the direct bina olderuser upar m jo 2 banaye h n ek comment and ek alag wla direct setuser m dal skte the iskko hi destructuring kahte hain
setAllUsers([...allUsers, {email,name}])

    setName('')
    setEmail('')
    
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type = "text" placeholder='Enter naam'
        value={name}
        required
        onChange={(e) => {
          setName(e.target.value)
        }}
        />
        <input type = "text" placeholder='Enter email'
        value={email}
        required
        onChange={(e) => {
          setEmail(e.target.value)
        }}

        />
        <button>Submit</button>

      </form>
      {allUsers.map((elem, idx) => {
        return <div key= {idx}>
          <h3>{elem.name}</h3>
          <p>{elem.email}</p>
        </div>
      })}
    </div>
  )
}

export default App
