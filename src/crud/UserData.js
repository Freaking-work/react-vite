import { useReducer } from "react"

const initialValue={
    id:'',
    name:'',
    email:'',
    phno:'',
    password:''
}

const userReducer=(state,action)=>{
    return state;
};

const[state,dispatch]=useReducer(userReducer,initialValue)
const UserContext=React.createContext()

ReactDom