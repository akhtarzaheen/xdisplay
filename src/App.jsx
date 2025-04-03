import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isShowtext, setIsShowText] = useState(false)

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
      setIsShowText(false);
    
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
      setIsShowText(false)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsShowText(true);
  }
console.log(firstName.length === 0 || lastName.length === 0)
  return (
    <>
     <h1>Full Name Display</h1>
    <form onSubmit={firstName.length === 0 || lastName.length === 0 ? null : handleSubmit}>
      <div>      <label for="firstName">First Name:</label>
        <input type="text"onChange={handleFirstNameChange} value={firstName} name="firstName" required/>
        </div>
<div>
        <label for="lastName">Last Name:</label>
        <input onChange={handleLastNameChange} value={lastName} type="text" name="lastName" required/>
        </div>
      <button type="submit">Submit</button>
    </form>
      <h1> { isShowtext && `Full Name: ${firstName} ${lastName}!`}</h1>
    </>
  )
}

export default App
