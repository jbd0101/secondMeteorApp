import React from "react";
import {Link} from 'react-router-dom';
import {Meteor} from "meteor/meteor";
export default class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      error: ""
    }
  }
  render(){
    return (
      <div>
        <h1>Login</h1>
        {this.state.error ? <p>{this.state.error}</p> : <span></span> }
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Your email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <p><Link to="SignUp">Create an account </Link></p>
      </div>
    );
  }
  handleSubmit(e){
    e.preventDefault();
    let that = this;
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({email},password,(err)=>{
        that.setState({
          error: err.reason
        })
      });
  }
}
