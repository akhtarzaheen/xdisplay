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
    console.log('submit')
    e.preventDefault()
    setText(`Full Name: ${firstName} ${lastName}`)
  }
console.log(firstName.length === 0 || lastName.length === 0)
  return (
    <>
     <h1>Full Name Display</h1>
    <form onSubmit={firstName.length === 0 || lastName.length === 0 ? null : handleSubmit}>
      <label for="firstName">First Name:</label>
        <input type="text"onChange={handleFirstNameChange} value={firstName} name="firstName" required/>
    
        <label for="lastName">Last Name:</label>
        <input onChange={handleLastNameChange} value={lastName} type="text" name="lastName" required/>
      <button type="submit">Submit</button>
    </form>
       <p>{text}</p>
    </>
  )
}

export default App
