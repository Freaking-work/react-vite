import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter} from 'react-router-dom'
export const UserContext=React.createContext()
export const ColorContext=React.createContext()
import { useReducer } from "react"

// const initialValue={
//     id:'',
//     name:'',
//     email:'',
//     phno:'',
//     password:''
// }

// const userReducer=(state,action)=>{
//     return state;
// };

// const[state,dispatch]=useReducer(userReducer,initialValue)
// const UserContext=React.createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <UserContext.Provider value={{state,dispatch}}> */}
      {/* <ColorContext.Provider value={'green'}> */}
    <App />
    {/* </ColorContext.Provider> */}
    {/* </UserContext.Provider>
    </BrowserRouter> */}
  </React.StrictMode>,
)



