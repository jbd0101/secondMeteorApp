import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import SignIn from "./../imports/ui/SignIn";
import SignUp from "./../imports/ui/SignUp";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = (
<Router>
  <div>
    
        <Route exact path="/" component={SignIn}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
  </div>
</Router> );
Tracker.autorun(()=>{
  const is_authenticated = !!Meteor.userId();
});
Meteor.startup(function(){

  ReactDOM.render(routes,document.getElementById("app"));

});
