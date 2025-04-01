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
      <p>
      <label for="firstName">First Name:</label>
        <input type="text"onChange={handleFirstNameChange} value={firstName} name="firstName" required/>
        </p>
        <p>
        <label for="lastName">Last Name:</label>
        <input onChange={handleLastNameChange} value={lastName} type="text" name="lastName" required/>
        </p>
      <button type="submit">Submit</button>
    </form>
       <p>{text}</p>
    </>
  )
}

export default App
