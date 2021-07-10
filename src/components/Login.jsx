import React from 'react'
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import loginContext from './context/logincontext';


export default function Login() {
    const history= useHistory();
    const context =useContext(loginContext)
    const  submit= event=>{
        event.preventDefault()
        history.push("/");
        context.isloggedin()
        console.log(context);


    }

    
     return (
         
        <div>
           
            <form  method="GET" className="container" onSubmit={submit} >
             

             <div className="form-group">
             <input className="form-control w-25 m-auto "    type="text" name="username" id="username" placeholder="username" />
            </div>
             <div className="form-group">
                 <input className="form-control w-25 m-auto "  type="tel" name="phone" id="phone" placeholder="phone number"  />
             </div>   
             
 
             <div className="form-group">
                 <button className="btn btn-success m-auto d-block" type="submit">LOGIN</button>
             </div>
 
             
         </form>
 
        </div>
    )
}
