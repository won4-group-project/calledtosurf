
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Input from '../../Input/Input.js';

import './Login.css';
import '../../Global/Global.css';
import axios from 'axios';

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //             email: '',
    //             password: '',
    //             storedUserData: [],
    //             redirect: false
    //     };
    //     // this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // I need to check the id against the db.  Once state has been set I need to do an axios call to varify the email.
    
   



    render() {

        return (
            <section className="container flex-ctr-col">
                <section className="form-wrapper">
                    <h2>Login</h2>
                    <form className="aln-cont-bl" onSubmit={this.handleSubmit} >
                        <label>EMAIL</label>
                        <Input className={""}
                            inputType={"email"}
                            name={"email"}
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <label>PASSWORD</label>
                        <Input inputType="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="SIGN IN" />
                        {/* Convert this into a react Link */}
                        <a href="/createAccount" >Create account</a>
                    </form>
                   
                </section>
            </section>
        );
    }
}

export default Login;