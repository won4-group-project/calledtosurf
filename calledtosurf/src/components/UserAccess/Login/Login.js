
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Input from '../../Input/Input.js';

import './Login.css';
import '../../Global/Global.css';

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

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            user: {
                [name]: value
            }

        }, () =>
                console.log("handlChange: " + this.state.user)
        );
    }

    handleSubmit(event) {
        // this.handleChange();
        console.log('Email: ' + this.state.email + " password: " + this.state.password);
        event.preventDefault();
    }

    render() {

        console.log("App.js: " + this.state.email)
        return (
            <section className="container flex-ctr-col">
                <section className="login">
                    <div>Login</div>
                    <form className="aln-cont-bl" onSubmit={this.handleSubmit} >
                        <label>EMAIL</label>
                        <Input className={""}
                            inputType={"email"}
                            name={"email"}
                            value={this.state.user.email}
                            handleChange={this.handleChange}
                        />
                        {/* <input
                            type="email"
                            name="email"
                            onChange={ this.handleChange } /> */}
                        <label>PASSWORD</label>
                        <Input inputType="password"
                            name="password"
                            value={this.state.password}
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