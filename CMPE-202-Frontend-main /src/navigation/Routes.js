import React, { Component } from "react";
import { Switch } from "react-router";
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    DefaultRoute
  } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

  export default class Routes extends Component{
      
      render(){
          console.log("Navigation")
          return(
              <div>
          <Router>
              <Switch>
                  <Route path="/login" component={Login}>
                      <Route path="/register" component={Register}/>

                  </Route>
              </Switch>
          </Router>
          </div>
          )
      }
  }