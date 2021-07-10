import React from 'react'
import './style.css'
import img from './images/img.jpg'


export default function Home(props) {
    return (
        <>

    
  <div className="card main-div m-auto">
  <div className="row no-gutters">
    <div className="col-md-5">
      <img src={img} alt="imag" className="w-100  h-100 " />
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Learning Code</h5>
        <h6 className="text-secondary text-uppercase"> Opening a door to the future</h6>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam ullam placeat quasi est tenetur voluptas, illum iure veritatis eius aliquam ex</p>
        <p className="card-text text-success text-right">Read More</p>
      </div>
    </div>
  </div>
</div>
<br />

<div className="card main-div m-auto ">
  <div className="row no-gutters">
   
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">MASTERING THE LANGUAGE</h5>
        <h6 className="text-secondary text-uppercase"> JAVA IS NOT SAME AS JAVASCRIPT</h6>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam ullam placeat quasi est tenetur voluptas, illum iure veritatis eius aliquam e </p>
        <p className="card-text text-success text-right">Read More</p>
      </div>
    </div>
    <div className="col-md-5">
      <img src={img} alt="imag" className="w-100 h-100 " />
    </div>
  </div>
</div>
            
        </>
    )
}
