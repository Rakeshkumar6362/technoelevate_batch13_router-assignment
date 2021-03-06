import { Link } from "react-router-dom";

 export const nav =(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <Link className="navbar-brand" to="/">Employee Portal</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
       
      </ul>
      
    </div>
  </nav>
)