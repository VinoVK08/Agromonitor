import React from "react";
import Overview from "./Overview";
import CropDensity from "./CropDensity";
import CropNDVI from "./CropNDVI";
import Weather from "./Weather";
import Logout from "./Logout";
import {BrowserRouter as Router,
  Switch,
  Route,Link} from "react-router-dom";

 function Header() {
  return (
    <header id="header-background">
         <h1>agromonitor</h1>
         <Router>
         <div class="topnav">
           
           <Link to="/overview" >Overview</Link>
           <Link to="/cropDensity">Crop Density</Link>
           <Link to="/cropNDVI">Crop NDVI</Link>
           <Link to="/weather">Weather</Link>
           <Link to="/logout">Logout</Link>
           </div>
           <Switch>
             <Route path="/overview" exact>
              <Overview/>
             </Route>
             <Route path="/cropDensity" exact>
              <CropDensity/>
             </Route>
             <Route path="/cropNdvi" exact>
              <CropNDVI/>
             </Route>
             <Route path="/weather" exact>
              <Weather/>
             </Route>
             <Route path="/logout" exact>
              <Logout/>
             </Route>
           </Switch>
           </Router>
         


    </header>
  );
}
export default Header;