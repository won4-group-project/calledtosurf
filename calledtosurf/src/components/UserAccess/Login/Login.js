
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // I need to check the id against the db.  Once state has been set I need to do an axios call to varify the email.

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            user: {
                [name]: value
            }

        }, () =>
                console.log("handlChange: Email: " + this.state.user.email + "Password: " + this.state.user.password)
        );
    }

    handleSubmit(event) {
        // axios.get and check the db against the state. 
        // how do I use passport here?
        Axios.get('/get_users/', function(req, res){
            
        })

        console.log('Email: ' + this.state.user.email + " password: " + this.state.user.password);
        event.preventDefault();
    }



    render() {

        console.log("App.js: " + this.state.email)
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
                            onChange={this.handleChange}
                        />
                        <label>PASSWORD</label>
                        <Input inputType="text"
                            name="password"
                            value={this.state.user.password}
                            onChange={this.handleChange}
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