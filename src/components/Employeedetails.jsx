import React from 'react'
import user1 from './images/user1.jpg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'
import user4 from './images/user4.jpg'
import user5 from './images/user5.jpg'
import user6 from './images/user6.jpg'
import './style.css'



export default function Employeedetails() {
    return (
        <div className="container" > 
        <div className="row ">
        <div className="col  p-4 bg-light ">
            <img src={user1} alt="..." className="m-auto d-block bg-white" style={
                {
                    borderRadius:"50%",
                    width:"150px",
                    height:"150px"
                }
            } />
            <h4 className="text-info text-center">sunlimitech</h4>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, fugiat!</p>
            <button className="btn btn-success d-block m-auto">+</button>



            
        </div>
        <div className="col p-4 bg-light" >
        <img src={user2} alt="..." className="m-auto d-block " style={
                {
                    borderRadius:"50%",
                    width:"150px",
                    height:"150px"
                }
            } />
            <h4 className="text-info text-center">sunlimitech</h4>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, fugiat!</p> 
            <button className="btn btn-success d-block m-auto">+</button>

        </div>
        <div className="col p-4 bg-light">
        <img src={user3} alt="..."  className="m-auto d-block " style={
                {
                    borderRadius:"50%",
                    width:"150px",
                    height:"150px"
                }
            }/>
            <h4 className="text-info text-center">sunlimitech</h4>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, fugiat!</p>
            <button className="btn btn-success d-block m-auto">+</button>


        </div>
        
        </div>
        <div className="row ">
        <div className="col  p-4 bg-light ">
            <img src={user4} alt="..." className="m-auto d-block bg-white" style={
                {
                    borderRadius:"50%",
                    width:"150px",
                    height:"150px"
                }
            } />
            <h4 className="text-info text-center">sunlimitech</h4>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, fugiat!</p>
            <button className="btn btn-success d-block m-auto">+</button>



            
        </div>
        <div className="col p-4 bg-light" >
        <img src={user5} alt="..." className="m-auto d-block " style={
                {
                    borderRadius:"50%",
                    width:"150px",
                    height:"150px"
                }
            } />
            <h4 className="text-info text-center">sunlimitech</h4>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, fugiat!</p> 
            <button className="btn btn-success d-block m-auto">+</button>

        </div>
        <div className="col p-4 bg-light">
        <img src={user6} alt="..."  className="m-auto d-block " style={
                {
                    borderRadius:"50%",
                    width:"150px",
                    height:"150px"
                }
            }/>
            <h4 className="text-info text-center">sunlimitech</h4>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, fugiat!</p>
            <button className="btn btn-success d-block m-auto">+</button>


        </div>
        
        </div>
  
            
        </div>
    )
}
