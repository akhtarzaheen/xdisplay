import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [text, setText] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
    if(e.target.value.length === 0){
      setText('')
    }
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
    if(e.target.value.length === 0){
      setText('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(`Full Name: ${firstName} ${lastName}`)
  }

  return (
    <>
     <h1>Full Name Display</h1>
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', alignItems: 'center',gap:"10px",marginBottom:"10px" }}>
        <span>First Name:</span>
        <input onChange={handleFirstNameChange} value={firstName} type="text" required/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center',gap:"10px",marginBottom:"10px" }}>
        <span>Last Name:</span>
        <input onChange={handleLastNameChange} value={lastName} type="text" required/>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div>
       <p>{text}</p>
    </div>
    </>
  )
}

export default App
