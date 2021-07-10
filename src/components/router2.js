import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Employeedetails from "./Employeedetails";
import Employeelist from "./Employeelist";
import Home from "./Home";

import Logout from "./Logout"


export const rout=(
    <BrowserRouter>
    
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
      <li className="nav-item active">
        <Link className="nav-link" to="/employeelist">Employee List <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/employeedetails">Employee Details <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">Logout</Link>
      </li>
     
    </ul>
    
  </div>
</nav>
<Switch>
  <Route path="/" component={Home}  exact/>
  <Route path="/home" component={Home} />
  <Route  path="/logout" component={Logout}/>
  <Route path="/employeelist"  component={Employeelist} />
  <Route path="/employeedetails"  component={Employeedetails} />


</Switch>
    </BrowserRouter>
)