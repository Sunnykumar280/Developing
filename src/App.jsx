import React from 'react'
import Card from './components/Card'
const App = () => {
//ek object banate hain
const cardData1 = {
  username: 'Sunny',
  gmail:'sunny919422gmail',
  profile:'https://images.unsplash.com/photo-1791395026864-d3da36e064f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D',
  degree:'Computer Science Engineer'
}
const cardData2 = {
  username: 'Hero',
  gmail:'sunny919422gmail',
  profile:'https://images.unsplash.com/photo-1791395026864-d3da36e064f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D',
  degree:'Computer Science Engineer'
}

  return (
    <div>
      <Card cardData={cardData1} />
      <Card cardData={cardData2} />
    </div>
  )
}

export default App
