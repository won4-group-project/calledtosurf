
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Input from '../../Input/Input.js';

import './Login.css';
import '../../Global/Global.css';
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            }

        };
        this.handleUserEmail = this.handleUserEmail.bind(this);
        this.handleUserPassword = this.handleUserPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // I need to check the id against the db.  Once state has been set I need to do an axios call to varify the email.
    
    handleUserEmail(event) {
        // const value = event.target.value;
        this.setState({
            user: {
                email: event.target.value
            }

        }, () =>
                console.log(`Email: ${this.state.user.email}`)
        );
    }

    handleUserPassword(event){
        // const value = event.target.value;
        this.setState({
            user:{
                password: event.target.value
            }
        }, ()=>{
            console.log(`Password: ${this.state.user.password}.`)
        });
    }

    handleSubmit() {
        let { email, password } = this.state.user
       
        Axios.get('/api/login/').then( res =>{
            // let {email, user_password} = res.data;
            if(email === res.data.email){
                if(password === res.data.user_password){
                    console.log(true);
                }
            } else {
                console.log(false);
            }
        });

    }


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
                            value={this.state.user.email}
                            onChange={this.handleUserEmail}
                        />
                        <label>PASSWORD</label>
                        <Input inputType="text"
                            name="password"
                            value={this.state.user.password}
                            onChange={this.handleUserPassword}
                        />
                        <input type="submit" value="SIGN IN" />
                        {/* Convert this into a react Link */}
                        <a href="#" >Create account</a>
                    </form>
                </section>
            </section>
        );
    }
}

export default Login;