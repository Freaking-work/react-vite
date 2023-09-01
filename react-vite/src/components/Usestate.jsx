import React,{useState} from 'react'

function Usestate(props) {

   const [msg,setmsg]=useState("Hiii")
   const [name,setname]=useState("Deepak")
   function click(){
        setmsg("byee")
        setname("Abdur")
   }

  return (
    <div>Usestate<br />
        <b>Name:{name}</b><br />
        <b>Type Message:{msg}</b>
        <button onClick={()=>click()}>Click Here</button>

    </div>
  )
}

export default Usestate