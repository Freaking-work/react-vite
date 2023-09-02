import React,{useContext} from 'react'
import {UserContext,ColorContext} from '../main'
function ContextAPI() {
    const name=useContext(UserContext)
    const color=useContext(ColorContext)
  return (
  <>
    <UserContext.Consumer>
        {
            user=>{
                return(<h1>{user}</h1>)
            }
        }
    </UserContext.Consumer>
    <div>ContextAPI {name}-{color}</div>
    </>
  )
}

export default ContextAPI