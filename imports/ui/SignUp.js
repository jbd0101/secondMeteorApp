import React from "react";
import {Accounts} from "meteor/accounts-base";
import {Link} from "react-router-dom";

export default class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: ""
    }
  }
  render(){
    return (
      <div>
        <h1>Join short links </h1>
        {this.state.error ? <p>{this.state.error}</p> : <span></span> }
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Your email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Create account</button>
        </form>
        <p><Link to="/">You have already an account </Link></p>

      </div>
    )
  }
  handleSubmit(e){
    e.preventDefault();
    let that = this;
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Accounts.createUser({
      email: email, password: password},(err)=>{
        that.setState({
          error: err
        })
      });

  }
}
