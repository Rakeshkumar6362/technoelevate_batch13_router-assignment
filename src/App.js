// import logo from './logo.svg';
import './App.css';
import { routing } from './router';
import { useState } from 'react';
import loginContext from './components/context/logincontext';
import {rout} from './components/router2'


function App() {
  const [login, setlogin] = useState(true)
  const isloggedin =()=>{
    setlogin(!login)
  }
  const data ={login , isloggedin}
  return (
   <>
  <loginContext.Provider value={data}>
    {login ? <>{routing}</>:<>{rout}</>}
    </loginContext.Provider>  
   </>
  );
}

export default App;
