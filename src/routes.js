import React from "react";
import { Switch, Route } from "react-router-dom";
// import {Splash} from './Components/Splash/Splash'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Splash from './Components/Splash/Splash'
import Dashboard from './Components/Dashboard/Dashboard'

export default (
  <Switch>    
    {/* <Route exact path="/" component={Splash} /> */}
    <Route exact path='/splash' component={Splash}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register} />
    <Route path='/' component={Dashboard} />
  </Switch>
);






