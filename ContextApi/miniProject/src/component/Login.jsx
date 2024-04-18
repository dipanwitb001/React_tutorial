// how data is accessed and send through


import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const[username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // this setUser is from UserContextProvider, which is passed to the childrem for data access. If req, if any additional information is to be added to the user, which can be done through setUser method. The access of setUser is provided through useContext hook(bt providing the context)

    const {setUser} = useContext(UserContext)


    // this method is called when the user clicks on the submit button, which sends the value of the specified fields through the setUser method.
    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='username' />
      {" "}
      <input type="text" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password' />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
