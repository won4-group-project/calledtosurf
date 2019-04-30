
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import '../../Global/Global.css';

class Login extends Component{
    
    render(){
        return(
            <section className="container flex-ctr-col">
                <section className="login">
                    <div>Login</div>
                    <form>
                      <label></label>
                      <input type="email" />
                      <input type="password" />
                      <input type="submit" value="SIGN IN" />
                    </form>
                    {/* Convert this into a react Link */}
                    <a href="#" >Create account</a>
                </section>
            </section>
        );
    }
}

export default Login;