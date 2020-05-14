import React, {Component} from 'react';
import './login.css';

export default class Login extends Component {
    render() {
        return(
    <div className="App">
      
      <div id ="login">
      <h3 class="text-center text-black pt-5">LOGIN</h3>
      <div class="signupcontainer">
      <div class="login-row">
      <div id="login-box" class="col-md-12">

      <form id ="login-form" class="form" >
      <br/>
      <h3 class="text-center text-info">Login</h3> 

      <div class="form-group">
           <label>Email:</label><br/>
           <input type = "email" name="email" placeholder="Email"/>
           </div>
           
      <div class="form-group">
           <label>Password:</label><br/>
           <input type = "password" name = "password" placeholder="Password"/>
           </div>
           <br/>
            
           <input type="submit" class="button" value="Create Account"/>
           </form> 
           </div>
           </div>
           </div>
           </div>
           </div>
        )
    }
}