import { useState , useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const[numAllowed, setNumAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef("")

  // useCallback optimises
  // learn about useCallback hook from documents
  // useCallback (fn, dependencies) => takes two inputs, a function and dependencies. here the length , numAllowed or not and charAllowed or not are the dependencies on which the useCallback hook will depend on , as on any change of these parameters, the password generated will be changed\

  // useCallback memoise the function
  // useCallback keeps the new password generated in the cache

  const passwordGenerator = useCallback(() => {
    // pass will contain the new password generated and hence will be updated using setPassword function.

    let pass = ""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"

    if (numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}+-/=?~`><[]|"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numAllowed,charAllowed,setPassword])


  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
  // copy to clipboard, as it is in core react, we can make use of window object
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.curr
    window.navigator.clipboard.writeText(password)
  },
  [password])
  
  // useEffect is used here, as to reload (re run) the function every time the dependencies given in the array are changed
  // useEffect runs the application(runs the function)
  useEffect(() =>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-800'
    >
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
       />
       <button
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }} 
            />
            <label htmlFor="characterInput">Character</label>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
