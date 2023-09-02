import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IndexPage() {
    const[department,setdepartment]=useState('')
    const[student,setstudent]=useState('')
    const navigation=useNavigate()

    function navigatePage(e){
        navigation('/.home/'+department+'/'+student);


    }
  return (
    <>
    <h1>Department</h1>
    <input value={department} onChange={(e)=>{setdepartment(e.target.value)}}/>
    <h1>Student</h1>
    <input value={student} onChange={(e)=>{setstudent(e.target.value)}}/>
    <button onClick={()=>navigatePage()}>Go to</button>
    
    </>
  )
}




