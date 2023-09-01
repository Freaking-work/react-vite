// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import AboutClass from './components/AboutClass'
import Counter from './components/Counter'
import Home from './components/Home'
import HomeClass from './components/HomeClass'
import Random from './components/Random'
import Me from './components/Me'
import Usestate from './components/Usestate'
import LifeCycleComponent from './components/LIfeCycleComponent'
import MountLifecycleExample from './components/MountLifecycleexample'
import UpdateLifecycle from './UpdateLifecycle'
import RenderingComponent from './components/RenderingComponent'
import Colorful from './components/Colorful'
import DesignComponent from './components/DesignComponent'
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

  //  <About/>
  //<AboutClass name="Deepak" work="Student"/>
  //<Usestate />
   // <RenderingComponent/>
  //<LifeCycleComponent/>
  //<MountLifecycleExample/>
    //<UpdateLifecycle/>
  // <div>  
  //   <Random />    
  //   <Counter/>
  // </div>
 // <Colorful/>
  <DesignComponent/>
  )
}

export default App
