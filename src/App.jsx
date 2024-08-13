import { useState,useCallback,useRef,useEffect } from 'react'

import './App.css'

function App() {
  const [Password, setPassword] = useState("")
  const [Length,setLength] = useState(6)
  const [Uppercase,setUppercase] = useState(false)
  const [Lowercase,setLowercase] = useState(false)
  const [Number,setNumber] = useState(false)
  const [Symbol,setSymbol] = useState(false)

  let passwordref = useRef(null)

  const PasswordGenerator = useCallback(()=>{
    let str = ""
    let result = ""
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowercase = "abcdefghijklmnopqrstuvwxyz"
    let symbol = "~!@#%^&*()_+{}[].,></?"
    let number = "1234567890"

    if(Uppercase) str+=uppercase
    if(Lowercase) str+=lowercase
    if(Number) str+=number
    if(Symbol) str+=symbol

    for(let i=1;i<=Length;i++){
      result+=str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(result)

  },[Length,Uppercase,Lowercase,Number])

  useEffect(()=>{
    
      PasswordGenerator();

  },[Length,PasswordGenerator,Uppercase,Lowercase,Number,Symbol])

  const copy = useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  return (
    <>
    <div className='h-screen w-screen bg-[#f0f2f5] flex items-center justify-center p-4'>      
      <div className='flex flex-col justify-center align-middle items-center flex-wrap'>
          <h1 className='m-5 p-5 text-3xl font-sans text-center text-wrap font-semibold'>Instantly generate a secure, random password with the online tool</h1>
          <h3 className='m-5 p-5 text-sm flex text-wrap flex-wrap font-sans text-center py-2'> Use our online password generator tool to instantly create a secure, random password.</h3>
          <div className='bg-white shadow-md  mt-6  flex rounded-xl items-center rounded-b-none w-4/5'>
          <input type="text" value={Password} className=' m-5 text-2xl font-mono font-semibold bg-white  w-4/5 flex-grow' ref={passwordref} readOnly />
          <img src="https://www.freeiconspng.com/thumbs/copy-icon/copy-icon-25.png" className='h-8 m-3 mr-0 hover:cursor-pointer'onClick={copy}/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/2048px-Refresh_icon.svg.png" className='h-8 m-3  hover:cursor-pointer' alt="" onClick={PasswordGenerator}/>
          </div>
          <div className='bg-green-800 w-4/5 h-1.5'></div>

          <div id='card' className=' mt-6 bg-white text-start px-4 pt-2 rounded-xl w-4/5 '>
            <div className='mx-8 md:flex-row '>
            <h1 className='text-2xl font-[550] font-sans mt-6'>Customize your password</h1>
            <div className='bg-gray-300 h-1.5 w-full'> </div>


              <h1 className='pt-9 '>Password Length</h1>
             
             
              <div className='flex mt-4 gap-5 items-start md:flex-row flex-col md:items-center  '>
                <input type="number" value={Length} onChange={(e)=>{
                  setLength(e.target.value)
                }}  className='border-gray-300 w-11 text-center border-2 h-10'  />
                
                <input type="range" value={Length}  min={1} max={50} className='mr-20 w-64' onChange={
                  (e)=>{
                    setLength(e.target.value)
                  }
                } />


                  <ul className='flex md:flex-col md:m-5 gap-5 flex-wrap'>
                    <li className='flex  items-center gap-1'><input type="checkbox" onChange={()=>setUppercase(!Uppercase)} defaultChecked={Uppercase}  className='h-16 '/> Uppercase</li>
                    <li className='flex  items-center gap-1'><input type="checkbox" onChange={()=>setLowercase(!Lowercase)} defaultChecked={Lowercase} className='h-16 '/> Lowercase</li>
                    <li className='flex  items-center gap-1'><input type="checkbox" onChange={(()=>setNumber(!Number))} defaultChecked={Number} className='h-16 '/> Number</li>
                    <li className='flex  items-center gap-1'><input type="checkbox" onChange={()=>setSymbol(!Symbol)} defaultChecked={Symbol} className='h-16 '/> Symbol</li>
                  </ul>

                  </div>

            </div>
          </div>

      </div>
    </div>
    </>
  )
}

export default App
