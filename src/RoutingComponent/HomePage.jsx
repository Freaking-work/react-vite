import React from 'react'
import { useLocation,useParams } from 'react-router-dom'

export default function HomePage() {
    const location=useLocation();
    const params=useParams();

    const{pathname,index,hash}=location;
    const{page,student}=params

  return (
    <div>
        <h1>Current Location</h1>
        <p>PathName:{pathname}</p>
        <p>Params1:{page}</p>
        <p>Params2:{student}</p>
    </div>
  )
}


