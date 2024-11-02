import React, { useState } from 'react'
import "../index.css"
const FormValidation = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [errorUsername, setErrorUsername] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

  const [userNameColor , setUserNameColor] = useState("")
  const [emailColor, setEmailColor] = useState("")
  const [passwordColor, setPasswordColor] = useState("")
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("")

  const validate = (e)=>{
    e.preventDefault()
    if (userName.trim() == "" ) {
      setUserNameColor("red")
      setErrorUsername("Username is Required")
    }else{
      setUserNameColor("green")
    }

    if (email.includes("@gmail.com")) {
      setEmailColor("green")
    }else{
      setEmailColor("red")
      setErrorEmail("Please use a valid email ")
    }

    if (password.length < 8) {
      setPasswordColor("red")
      setErrorPassword("Password must be 8 letters long")
    }else{
      setConfirmPasswordColor("green")
      setErrorPassword("")
    }

    if (confirmPassword !== password ) {
      setConfirmPasswordColor("red")
      setErrorConfirmPassword("your Password should Match ")
    }else{
      setPasswordColor("green")
    }



  }

  return (
    <>
    <div className="card">
      <div className="card-image"></div>

        <form >
          <input 
                type="text" 
                value={userName} 
                placeholder='Name' 
                onChange={e=>setUserName(e.target.value)} 
                style={{borderColor: userNameColor}}
          />
          <p className='error'>{errorUsername}</p>

          <input 
                type="email" 
                placeholder='Email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                style={{borderColor: emailColor}}
          />
          <p className='error'>{errorEmail}</p>
          <input 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={e=>setPassword(e.target.value)}
                style={{borderColor: passwordColor}}
          />
          <p className='error'>{errorPassword}</p>
          <input 
                type="password" 
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={e=>setConfirmPassword(e.target.value)}
                style={{borderColor: confirmPasswordColor}}
          />
          <p className='error'>{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default FormValidation